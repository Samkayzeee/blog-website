import Navbar from "../../../components/navbar/Navbar";
import './Login.css';

const Login = () => {
    return ( 
        <>
        <Navbar />
        <div className="login-container">
            <div className="img">
                <h1>Login Your Account</h1>
            </div>

        <form action="" className="login-form">

            <label htmlFor="email">Input your Email*</label>
            <input type="email" name="" id="email" required/>

            <label htmlFor="password">Password*</label>
            <input type="password" name="" id="password" required/>

            <button type="submit">Login <i className="fa-solid fa-right-to-bracket"></i></button>

        </form>
        </div>
        </>
     );
}
 
export default Login;