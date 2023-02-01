import Navbar from "../../../components/navbar/Navbar";
import './Login.css';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login  = (e) => {
            e.preventDefault();

        let LoginData = {
            email:email,
            password:password
        }    

    const RawUserdata = localStorage.getItem("Userdata");
    const Userdata = JSON.parse(RawUserdata);

    if (LoginData.email === Userdata.email && LoginData.password === Userdata.password) {
        console.log("Login Successful");
    }
    else{
        console.log("Not Successful");
    }

    e.target.reset();
    }
    return ( 
        <>
        <Navbar />
        <div className="login-container">
            <div className="img">
                <h1>Login Your Account</h1>
            </div>

        <form action="" className="login-form" onSubmit={Login}>

            <label htmlFor="email">Input your Email*</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="email" required/>

            <label htmlFor="password">Password*</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="" id="password" required minLength={8}/>

            <button type="submit">Login <i className="fa-solid fa-right-to-bracket"></i></button>

        </form>
        </div>
        </>
     );
}
 
export default Login;