#include <EEPROM.h>
#include <WiFi.h>
#include <HTTPClient.h>

#define LED 2 //LED
#define PB1 34 //DN ปุ่มสีน้ำเงินซ้าย
#define PB2 35 //UP ปุ่มสีน้ำเงินขวา
#define PB3 32 //Set ปุ่มสีส้มตรงกลาง
#define TX 5 //Ultrasonic
#define RX 18 //Ultrasonic
#define RANGE 4000 //ระยะทางสูงสุดของ Ultrasonic 

#include <Adafruit_SSD1306.h>
Adafruit_SSD1306 display(128,64);
String pset = "          <>           "; 

int pb1 = HIGH; //DN ปุ่มสีน้ำเงินซ้าย
int pb2 = HIGH; //UP ปุ่มสีน้ำเงินขวา
int pb3 = HIGH; //Set ปุ่มสีส้มตรงกลาง

const char* ssid     = "ESP"; 
const char* password = "123456789";
bool online=true; 
String host = "10.10.10.39"; 

volatile float volume = 0.0;
volatile float flow = 0;
volatile unsigned int ct = 0;
int distances = 0;
int _height = 0;
unsigned char _time = 6;
unsigned char _count = 0;
byte _mode = 0;
int keyInterval = 1000; 

hw_timer_t *My_timer = NULL; 

void IRAM_ATTR onTimer(){ 
  ct++; 
}

void isr(void *pvParameters){
  My_timer = timerBegin(0, 80, true);
  timerAttachInterrupt(My_timer, &onTimer, true); 
  timerAlarmWrite(My_timer, 1000000, true); 
  timerAlarmEnable(My_timer);
  vTaskDelete(NULL); 
}

static void setMode(void *pvParameters){
  for(;;){
    if(pb3==LOW){      
      if(--_time==0){
        if(_mode==1){
          _mode=0;
          mem_write();    
        } else {
          _mode=1;
          mem_read();
        } 
      }
    } else {    
      _time=3; 
    }
    vTaskDelay(pdMS_TO_TICKS(1000)); 
  }
}

static void sonic(void *pvParameters){
  for(;;){
    digitalWrite(LED, !digitalRead(LED)); //blink LED
    Serial2.flush();
    Serial2.write(0X55);
    if (Serial2.available() >= 2) { 
      int HighByte = Serial2.read();
      int LowByte  = Serial2.read();
      HighByte  = HighByte * 256 + LowByte;     
      if(HighByte>1 && HighByte<RANGE){
        distances=_height-HighByte; 
        if(distances>0){       
          flow=float(40351.1842108257*pow(((distances*0.00328084)+0.0036961744),2.5));
        } else flow=0.0;                  
      }
    }
    if(ct){
      volume = volume+(flow*ct);
      ct=0; 
    }   
    vTaskDelay(pdMS_TO_TICKS(1000)); 
  }
}

static void vTaskOled(void *pvParameters){ 
  for(;;){
    pb1 = digitalRead(PB1); //DN ปุ่มสีน้ำเงินซ้าย
    pb2 = digitalRead(PB2); //UP ปุ่มสีน้ำเงินขวา
    pb3 = digitalRead(PB3); //Set ปุ่มสีส้มตรงกลาง
    if(pb3==LOW){ 
      if(_mode==0) pset = "Set to calibrate. ";
      if(_mode==1) pset = "Set to monitor... ";
      pset = pset + String(_time);
    } else {
      if(_mode==0) pset = "     <Calibrate>    ";
      if(_mode==1) pset = "<DN>  <Monitor>  <UP>";
    }
    if(_mode==0){
      if(pb1==LOW) pset = "LocalIP:" + WiFi.localIP().toString();
      if(pb2==LOW) pset = "HostIP:" + host;
    }
    display.clearDisplay();
    if(_mode==0){
      display.setCursor(0,0);
      display.println("...Monitor mode...");
      display.print("Distance: ");
      display.println(distances);
      display.print("Flow: ");
      display.println(flow);
      display.print("Volume: ");
      display.println(volume);
      display.print("Height: ");
      display.println(_height);
    }
    if(_mode==1){
      display.setCursor(0,0);
      display.println("..Calibration Mode..");
      display.println("PressUp+ : PressDN- ");      
      display.print("Distance: ");
      display.println(distances);
      display.print("Height: ");
      display.println(_height);   
    }
    if(online) display.println("On Line");
      else display.println("Off Line");
    display.setCursor(0,57);
    display.print(pset);
    display.display();
    vTaskDelay(pdMS_TO_TICKS(100)); 
  }
}

static void key(void *pvParameters){
  for(;;){
    if(_mode==1){
      if(pb1==LOW || pb2==LOW){          
        if(pb2==LOW){
          if(_height>299) _height=0; else _height++; //up
        }
        if(pb1==LOW){
          if(_height<1) _height=300; else _height--; //down    
        }
        if(keyInterval>50) keyInterval=(int)keyInterval/2;              
      } else {
          keyInterval=1000; 
      }
    }
    vTaskDelay(pdMS_TO_TICKS(keyInterval));
  }
}

void mem_read() {
  _height = EEPROM.readByte(1) | EEPROM.readByte(0) << 8;
  if(_height>RANGE) _height=1; 
}

void mem_write() {
  EEPROM.writeByte(0,_height >> 8); 
  EEPROM.writeByte(1,_height & 0xFF); 
  EEPROM.commit();
}

void setup() {
  display.begin(SSD1306_SWITCHCAPVCC, 0x3C); 
  display.setTextSize(1);
  display.setTextColor(WHITE);
  display.clearDisplay();
  display.setCursor(0,0);
  display.println("Weir Flow Meter");
  display.display();
  delay(500);

  Serial.begin(115200);
  display.println("Serial_8N1,115200");
  display.display();
  delay(500);
  
  Serial2.begin(9600, SERIAL_8N1, TX, RX);
  display.println("Ultrasonic_" + String(TX) + "," + String(RX));
  display.display();
  delay(500);
  
  pinMode(LED, OUTPUT);
  display.println("LED_" + String(LED));
  display.display();
  delay(500);

  pinMode(PB1, INPUT);
  pinMode(PB2, INPUT);
  pinMode(PB3, INPUT);
  display.println("Button_" + String(PB1) + "," + String(PB2) + "," + String(PB3));
  display.display();
  delay(500);

  EEPROM.begin(512);
  delay(500); 
  mem_read();  
  
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  WiFi.begin(ssid,password);
  byte i=9;
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    if(++i%10==0){
      display.clearDisplay();
      display.setCursor(0,24);
      display.println("WiFi conect to " + String(ssid));
      display.print("Conecting");
    } else {
      display.print(".");
    }
    display.display();
    if(i>100) { 
      online=false;
      break;
    }
  }
  
  xTaskCreate(isr,"isr",2048,NULL,1,NULL); 
  xTaskCreate(setMode,"setMode",2048,NULL,0,NULL);
  xTaskCreate(sonic,"sonic",4096,NULL,0,NULL); 
  xTaskCreate(key,"key",4096,NULL,0,NULL);
  xTaskCreate(vTaskOled,"vTaskOled",4096,NULL,1,NULL); 
  delay(500);
}

unsigned long printInterval=3000;  
void loop() {
  static unsigned long printTime = millis();  
  if(millis() - printTime > printInterval) {   
    printTime=millis();

    String AddData="http://" + host + "/update.php";
    AddData = AddData + "?mode=" + String(_mode)
                      + "&distance=" + String(distances)
                      + "&flow=" + String(flow)
                      + "&volume=" + String(volume)
                      + "&height=" + String(_height);

    if (WiFi.status() == WL_CONNECTED) {
      HTTPClient http;
      http.begin(AddData);
      http.addHeader("Content-Type", "application/x-www-form-urlencoded");
      int httpResponseCode = http.GET();
      if (httpResponseCode > 0) {
        online=true;
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);
      }
      else {
        online=false;
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
      }
      http.end();
    } else {
      online=false;
    }
    Serial.println(AddData);
  } 
}