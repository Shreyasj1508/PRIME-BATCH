const http=require('http');
const fs=require('fs').promises;
const PORT=3002;
const server=http.createServer((req,res)=>{

if(req.url=="/register" && req.method=="POST"){
    let body='';
    let arr=[];
    req.on('data',chunk=>{
        body+=chunk;
    })

    req.on('end',async ()=>{
        const {name,email,password}=JSON.parse(body);
        console.log(name);
        const fdata=await fs.readFile('student.json',{encoding:'utf-8'});
                arr=JSON.parse(fdata);
                console.log(arr);
                arr.push({name,email,password});


                await fs.writeFile('student.json',JSON.stringify(arr,null,2));
        
                //console.log(body);
            })
            res.end(JSON.stringify({"message":"/register api hit successfully!!"}));
        }
        
        //res.end("Welocme to Node Server");
        
        
        })
        server.listen(PORT,()=>{
            console.log("Server is running on:"+PORT)
        })
