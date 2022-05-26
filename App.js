import http from "http";
import fs from "fs";

let data = fs.readFileSync('./db.json');

let reqData = JSON.parse(data);

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type' : 'application/json' });
    if(req.url === '/'){
        res.write(data);
    }else if(req.url === '/products'){
        res.write(JSON.stringify(reqData.products));
    }else if(req.url === '/catagory'){
        res.write(JSON.stringify(reqData.catagory));
    }else if(req.url === '/brand'){
        res.write(JSON.stringify(reqData.brand));
    }else if(req.url === '/devs'){
        res.write(JSON.stringify(reqData.devs));
    }else if(req.url === '/student'){
        res.write(JSON.stringify(reqData.student));
    }else{
        res.write(JSON.stringify({
            status : 'no data found !'
        }))
    }

    res.end();

}).listen('5050', () => {
    console.log('server running');
});