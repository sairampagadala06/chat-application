import React from "react";



function Chatlist({chats})
{
    const user=localStorage.getItem("user")
    console.log(user);
    function Senderchat({message,username}){
        return<div className="chat_sender">
            <div className="chat">
                <h4>{username}</h4>
                <p> {message}</p>
            </div>
        </div>
    }

    function Receiverchat({message,username}){
        return<div className="chat_receiver">
            <div className="chat">
                <h4>{username}</h4>
                <p> {message}</p>
            </div>
        </div>
    }
    return(
        <div className="chats-list">
            {
                chats.map((chat,index)=>{
                    if(chat.user === user)
                        {
                            return <Senderchat
                            key={index}
                            message={chat.message}
                            username={chat.user}/>
                        }
                        else{
                            return <Receiverchat
                            key={index}
                            message={chat.message}
                            username={chat.user}/>
                        }
                })
            }

        </div>
    )
}
export default Chatlist;