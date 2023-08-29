const fs = require('fs');
const http = require('http');
let server = http.createServer((req,res)=>{
    if(req.url==="/"){
        let data = fs.readFileSync('home.html','utf8');
        res.write(data);
        res.end();
    }
    if(req.url==="/about"){
        let data = fs.readFileSync('about.html','utf8');
        res.write(data);
        res.end();
    }
    if(req.url==="/contact"){
        let data = fs.readFileSync('contact.html','utf8');
        res.write(data);
        res.end();
    }
    if(req.url==="/file-write"){
        fs.writeFile('demo.txt','Hello World', (error)=>{
            if(error){
                res.write("File is not created.");
                res.end();
            }
            else{
                res.write("File successfully written.");
                res.end();
            }
        });
    }
})
server.listen(3000, ()=>{
    console.log("Server run successfully");
})
