import React from "react";
import "../style/style.css"
import { Link } from "react-router-dom";
function Login()
{
    const [name,setName]=React.useState("");
    
    function adduser(){
        console.log(1);
        localStorage.setItem('user',name)
    }
    return(<div className="loginpage">
        <h1>Welcome to OIII</h1>
        <div className="inputnanme">
            <input type="text"  id="inputname-user" placeholder="enter your name" onChange={(e)=> setName(e.target.value)}></input>
        </div>
        <div className="inputbtn"> 
            <Link onClick={adduser} to={`/chat`}>
            <button >login</button>
            </Link>
        </div>
    </div>);
}
export default Login;