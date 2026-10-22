const http = require('node:http');
const fs = require('node:fs')

const server = http.createServer((req, res)=>{
    fs.appendFileSync('log.txt',`${req.method} request recieved...!!\n`)
    if(req.method === 'GET'){
        res.end('ye lo data...!!')
    }else if(req.method === 'POST'){
        // create data in database logic
        res.end('data successfully create ho chuka hai..!!')
    }else if(req.method === 'PUT'){
        // update karne ka logic
        res.end('data hamara update ho chuka hai...!!')
    }else if(req.method === 'DELETE'){
        // database me delete karne ka logic
        res.end('data delete ho chuka hai...!!')
    }else {
        res.end('shi method choose karo please...!!!')
    }
})

server.listen(8000,()=>{
    console.log("server listening on http://localhost:8000")
})