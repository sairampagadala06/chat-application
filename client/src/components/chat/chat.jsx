import React, { useState } from "react";
import Chatlist from "./chatlist/chatlists";
import Inputtext from "./inputtext";
import "../style/style.css"
import { useEffect } from "react";
import socketIOClient from "socket.io-client";
import { Link } from "react-router-dom";
import Login from "../login/login";
function Chat()
{
    const [user,setuser]=useState(localStorage.getItem("user"))
    const end='http://localhost:3050';
    const socket=socketIOClient(end);

    const [chats,setchats]=React.useState([]);  
    useEffect(()=>{
        socket.on("chat",(chats)=>{
            setchats(chats);
        });
    });

    function sendtosocket(chat){
        socket.emit("chat",chat);
    }
    function addmessage(chat){
        const newchat={
            ...chat,
            user:localStorage.getItem("user"),
        };
        setchats([...chats,newchat])
        sendtosocket([...chats,newchat])

    }
    function logout(){
        localStorage.removeItem(user);
    }

return(<div>
        <div className="chatheader"> 
            <h1>{user}</h1> 
            <h1>chats</h1>
            <Link onClick={logout} to={"/login"}>
            <button className="chatlogout">logout</button>
            </Link>

        </div>
          <Chatlist chats={chats}/>
          <Inputtext addmessage={addmessage}/>
    </div>);
}
export default Chat;
