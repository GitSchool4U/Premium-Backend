const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer((req,res)=>{
    // console.log(req.method);
    // console.log(req.url);
    // console.log(req.headers)
    const date = new Date().toLocaleString();
    const content = `New Request recieved, DATE: ${date}, url: ${req.url}\n`
    fs.appendFile('log.txt',content, ()=>{console.log("req recieved successfully..!!")})
    
    res.end('hello this is my response from my server')
})

server.listen(8000)