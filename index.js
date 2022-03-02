// Node.js program to demonstrate the 
// response.writeHead() Method

// Importing http module
var http = require('http');

// Setting up PORT
const PORT = process.env.PORT || 3000;

// Creating http Server
var httpServer = http.createServer(
    function (request, response) {

        const body = 'hello world';

        // Calling response.writeHead method
        response.writeHead(200, {
            'Content-Length': Buffer.byteLength(body),
            'Content-Type': 'text/plain'
        });

        response.end(body);
    });

// Listening to http Server
httpServer.listen(PORT, () => {
    console.log("Server is running at port 3000...");
});