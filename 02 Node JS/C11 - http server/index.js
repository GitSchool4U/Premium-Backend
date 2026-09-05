const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res)=>{
    const log = `${Date.now()}\n`
    fs.appendFileSync('log.txt',log)
    res.end(`hello from server ${new Date().toLocaleString()}`)
})

myServer.listen(8000,()=>{
    console.log("server running on http://localhost:8000")
})