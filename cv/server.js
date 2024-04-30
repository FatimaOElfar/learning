const server = require("http");
const path = require("path");
const fs = require("fs").promises;

const startServer = ()=>{
    const readFiles =async (fileName)=>{
        try{
            return await fs.readFile(`./project/pages/${fileName}.html`);
        }
        catch(err){
            return "500 Internal Server Erorr";
        }

    }
    //request listener
    const reqlistener=async(req,res)=>{
        const urlpath = req.url;
        const obj1 = await readFiles(urlpath.slice(1));
        if ( typeof obj1==="500 Internal Server Erorr"){
            res.writeHead(500,{"Content-Type":"text/plain"});
            res.end(obj1);
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(obj1);
        }

    }
    // create server
    const App = server.createServer(reqlistener);
    App.listen(5000,(err)=>{
        if(err){
            console.log("Something Went Wrong Chick Erorr->",err);
            return;
        }
        else{
            console.log("Start Server at port:5000");
        }
    });
}

module.exports = startServer;