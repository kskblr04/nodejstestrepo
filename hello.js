const messageModule = require("./messages")
let myVar = "universe!"
console.log("Hello %s", myVar)
messageModule.messages.forEach(m => console.log(m));