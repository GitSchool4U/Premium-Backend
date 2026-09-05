const http = require('node:http');

const server = http.createServer((req,res)=>{
    res.end('hello your server is ready')
})

server.listen(8000)