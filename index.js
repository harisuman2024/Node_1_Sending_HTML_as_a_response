// Please don't change the pre-written code
// Import the necessary modules here
const http = require("http");

// Write your code here

const fs = require('fs');
const { log } = require("console");


const server = http.createServer((req, res)=>{
    
    const data = fs.readFileSync('index.html').toString()
    res.end(data)
})

server.listen(8080)

console.log('server is listing on 8080')

module.exports = server;



