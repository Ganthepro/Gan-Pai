const url = 'https://script.google.com/macros/s/AKfycbwqq0p1SzBzYPTYS46VHrXkyq47Qnu2l9uco01xMUF6no2aYJsHt0EYEdYDHSr-g_RF/exec'
fetch(url, {
    method : "POST",
    headers : {
        "Content-Type" : 'application/json'
    },
    body : JSON.stringify({
        "" : test
    })
})