const http = require('http');

const server = http.createServer((req, res) => {
    
    switch (req.url) {
        case "/":
            res.write('<h1>Home Page</h1>');
            res.end();
            break;

        case "/about":
            res.write('<h1>About Page</h1>');
            res.end();
            break;
    
        default:
            res.write('<h1>404 Not Found!!</h1>');
            res.end();
            break;
    }
    
});

server.listen(3000);

console.log('listening on port 3000');