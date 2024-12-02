// Import the http module
const http = require('http');

// Define the port to listen on
const PORT = 3000;

// Create a server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response
    res.end('Hello, World! Welcome to my Node.js server.');
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
