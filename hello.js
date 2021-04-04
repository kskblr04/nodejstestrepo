"use strict"
const messageModule = require("./messages")
let myVar = "universe!"
console.log("Hello %s", myVar)
messageModule.messages.forEach(m => console.log(m));

const cities = require("cities");             1
var myCity = cities.zip_lookup("10016");      2
console.log(myCity); 

const addme = require("./addme");
console.log(addme.addNum(3,4));

const port = 3000, 
http = require("http"),                                           
httpStatus = require("http-status-codes"),  
app = http.createServer((request, response) => {                  
    console.log("Received an incoming request!");    
    response.writeHead(httpStatus.OK, {      
        "Content-Type": "text/html"    
    });                                                             
    let responseMessage = "<h1>Hello, Universe!</h1>";    
    response.write(responseMessage);    
    response.end();    
    console.log(`Sent a response : ${responseMessage}`);  
});
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);