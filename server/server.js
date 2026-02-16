// common js
// const express = require('express')

// module
import express from 'express'

const app = express()
// middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.send("ye hai hamara data")
})
app.get('/about', (req, res) => {
    res.send("about route")
})
app.get('/login', (req, res) => {
    res.send("you are logged in")
})

app.post("/create-user", (req, res)=>{
    console.log(req.body)
    res.send({
        "message":`Hey ${req.body.name}, your data saved successfully`
    })
})

app.listen(5000, ()=>{
    console.log("server running on http://localhost:5000")
})



// server using node js
// import http from 'http'

// const server = http.createServer((req, res) => {

//   if (req.url === "/" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("Hello from Node.js server");
//   }
//   else if (req.url === "/about" && req.method === "GET") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("About page");
//   }
//   else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page not found");
//   }

// });

// server.listen(3000, () => {
//   console.log("Node.js server running on http://localhost:3000");
// });