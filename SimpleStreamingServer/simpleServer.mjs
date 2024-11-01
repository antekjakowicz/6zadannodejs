import fs from 'fs'
import http from 'http'
import url from 'url'

const server = http.createServer((req,res)=>{

    const queryObject = url.parse(req.url, true).query
    const fileName = queryObject.file

    if(fileName){
        fs.readFile(fileName,'utf-8',(err,data)=>{
            if(err){
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end("Nie znaleziono pliku")
            } else {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(data)
            }
        })
    } else {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end("Nie ma parametru file")
    }
    
})

server.listen(3000, ()=>{
    console.log("Serwer nasluchuje na porcie 3000")
})