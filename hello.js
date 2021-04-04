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

const routeResponseMap = {
    "/info": "<h1>Info Page</h1>",  
    "/contact": "<h1>Contact Us</h1>",  
    "/about": "<h1>Learn More About Us.</h1>",  
    "/hello": "<h1>Say hello by emailing us here</h1>",  
    "/error": "<h1>Sorry the page you are looking for is not here.</h1>"
};

const port = 3000, 
http = require("http"),                                           
httpStatus = require("http-status-codes"),  
app = http.createServer((req, res) => {                  
    console.log("Received an incoming request!");    
    res.writeHead(httpStatus.OK, {      
        "Content-Type": "text/html"    
    });                                                             
    if (routeResponseMap[req.url]) {
        res.write(routeResponseMap[req.url]);    
    } else {      
        res.write("<h1>Welcome!</h1>");                     
    }    
    res.end();    
    console.log(`Sent a response : ${res}`);  
});
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);