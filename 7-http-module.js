const http = require('http');
 
const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('<h1>Welcome to our home page</h1>');
    }
    else if(req.url === '/about'){
        res.end('<h1>This is our breif history</h1>')
    }
    else{
        res.end(
            `<h1>Oops!</h1>
            <p>We can't find the page you are looking for</p>
            <a href='/'>Go back to home page</a>`
        )
    }
});

server.listen(5000);

