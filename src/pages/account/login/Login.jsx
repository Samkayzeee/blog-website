import './Login.css';
import { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import DefaultLayout from "../../../layout/DefaultLayout";

const Login = () => {
    const wrongloginRef = useRef(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const RawUserdata = localStorage.getItem("Userdata");
    const Userdata = JSON.parse(RawUserdata);

    const Login  = (e) => {
            e.preventDefault();
            const wrongLogin = wrongloginRef.current;

        let LoginData = {
            email:email,
            password:password
        }    

        if (!Userdata) {
            wrongLogin.innerHTML = "User Not Register Try Signing Up";
        }
        else{
            if (LoginData.email === Userdata.email && LoginData.password === Userdata.password) {
                let token = true;
                localStorage.setItem("token", JSON.stringify(token))
                navigate('/dashboard');
            }
            else{
                wrongLogin.innerHTML = "Login Not Successful";
            }
        }
    e.target.reset();
    }
    return ( 
        <>
        <DefaultLayout>
        <div className="login-container">
            <div className="img">
                <h1>Login Your Account</h1>
            </div>

        <form action="" className="login-form" onSubmit={Login}>

            <label htmlFor="email">Input your Email*</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="email" required/>

            <label htmlFor="password">Password*</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="" id="password" required minLength={8}/>
            <p ref={wrongloginRef}></p>

            <button type="submit">Login <i className="fa-solid fa-right-to-bracket"></i></button>

        </form>
        </div>
        </DefaultLayout>
        </>
     );
}
 
export default Login;