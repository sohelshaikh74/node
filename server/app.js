const readfile=require('fs')
// const content=readfile.readFile('./templates/index.html','utf-8',(err,data)=>{
//   console.log(data);
// })
const input=readfile.readFileSync('./templates/index.html','utf-8')
const http=require('http')
const server=http.createServer((req,res)=>{
    console.log('A new request recevied');
    res.end(input)
})

server.listen(8000,'127.0.0.1',()=>{
    console.log('server has started');
    
})