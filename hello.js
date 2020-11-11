const messageModule = require("./messages")
let myVar = "universe!"
console.log("Hello %s", myVar)
messageModule.messages.forEach(m => console.log(m));

const cities = require("cities");             1
var myCity = cities.zip_lookup("10016");      2
console.log(myCity); 

const addme = require("./addme");
console.log(addme.addNum(3,4));