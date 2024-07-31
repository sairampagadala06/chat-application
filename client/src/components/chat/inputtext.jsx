import React, { useState } from "react";
function Inputtext({addmessage}){
    const [message,setmessage]=useState();
    function sendmeesage(){
        addmessage({message});
        setmessage("");
    }

    return(
        <div className="inputtext">
            <textarea name="message" id="message" rows={3} onChange={(e)=>{setmessage(e.target.value)} } value={message}></textarea>
            <button onClick={sendmeesage}>Send</button>
        </div>
    );
}
export default Inputtext;