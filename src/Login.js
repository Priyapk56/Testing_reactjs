import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function signinHandler() {
        setMessage("Loading...");

        setTimeout(() => {
            if (email === 'yashini@gmail.com' && password === 'test@123') 
            {
                setMessage("Successfully Logged in!");
            } 
            else 
            {
                setMessage("Invalid Credentials!");
            }
            
        }, 3000);
    }

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <br />
            <input type="password" placeholder="Password" onChange={(p) => setPassword(p.target.value)}/>
            <br />
            <button onClick={signinHandler}>Signin</button>
            {message && <p>{message}</p>}
        </div>
    );
}
