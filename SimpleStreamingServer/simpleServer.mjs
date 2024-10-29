import fs from 'fs'
import http from 'http'

const server = http.createServer((req,res)=>{
    

    fs.readFile('example.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err)
            return
        } else {
            console.log("Zawartosc pliku: ",data)
        }
    })
})

server.listen(3000, ()=>{
    console.log("Serwer nasluchuje na porcie 3000")
})