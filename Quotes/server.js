const http = require('http');
const fs = require('fs');


const server = http.createServer( (req, res)=> {

    res.setHeader('Content-Type', 'text/html');

    if( req.url = '/') {
        fs.readFile('./views/all_quotes.html', (err, data)=> {
            res.write(data);
            res.end();
        });
    }
});

server.listen(3000, 'localhost', ()=>{
    console.log("Server running at port 3000");
});