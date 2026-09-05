const fs = require('fs');

console.log("first code")
console.log("2nd code")

// synchronous(blocking)
// console.log(fs.readFileSync('hello.txt','utf8'))

// Asynchronous (non-blocking)
fs.readFile('hello.txt','utf8',(err, data)=>{
    if(err) console.log(err)
    else console.log(data)
})

console.log("3rd code")
console.log("4rth code")