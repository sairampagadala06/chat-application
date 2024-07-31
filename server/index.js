import express from "express";
import http from "http";
import {Server as Socket} from "socket.io";
import cors from "cors";
import router from "./router.js";
const app=express();
const port=process.env.PORT || 3050;
app.use(router);
const server=http.createServer(app);
app.use(cors());

const io=new Socket(server,{
    cors: {
            origin: "*"
    }
});
io.on("connection",(socket)=>{
    console.log("connected");

    socket.on("chat", chat=>{
        io.emit("chat",chat);
    })


    socket.on("disconnection",()=>{
    console.log("disconnected");
    })
})
server.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
