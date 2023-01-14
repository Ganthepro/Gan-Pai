// Get the canvas element
var canvas = document.getElementById("myCanvas");

// Get the canvas context
var ctx = canvas.getContext("2d");

// Draw an image onto the canvas
var img = new Image();
img.src = "HT19-C00514-NHU036814-2SAM_CARVE.tif";
ctx.drawImage(img, 0, 0);

// Get the pixel data at a specific x and y position
var x = 50;
var y = 50;
var pixelData = ctx.getImageData(x, y, 1, 1).data;

// The pixel data is an array containing the red, green, blue, and alpha values for the pixel
var red = pixelData[0];
var green = pixelData[1];
var blue = pixelData[2];
var alpha = pixelData[3];

// You can use the pixel data to do further image processing or to get the color of the pixel
console.log("Color at x = " + x + ", y = " + y + ": (" + red + ", " + green + ", " + blue + ", " + alpha + ")");
