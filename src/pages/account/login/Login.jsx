import './Login.css';
import { useRef, useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from '../../../contexts/ThemeProvider';

const Login = () => {
    const context = useContext(ThemeContext);
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
                localStorage.setItem("token", JSON.stringify(token));
                wrongLogin.innerHTML = "Login Successful";
                wrongLogin.style.color = "green";

                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            }
            else{
                wrongLogin.innerHTML = "Login Not Successful";
            }
        }
    e.target.reset();
    }
    return ( 
        <>
        <div className={context.theme === "light"? "login-container" : "login-container login_dark_mode"}>
            <div className="img">
                <h1>Login Your Account</h1>
            </div>

        <form action="" className="login-form" onSubmit={Login}>

            <label htmlFor="email">Input your Email*</label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" name="" id="email" required/>

            <label htmlFor="password">Password*</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" name="" id="password" required minLength={8}/>
            <p className='wrong' ref={wrongloginRef}></p>

            <button type="submit">Login <i className="fa-solid fa-right-to-bracket"></i></button>
            <p className='new-user'>New User? <Link to={'/signup'}>create an account</Link></p>

        </form>
        </div>
        </>
     );
}
 
export default Login;