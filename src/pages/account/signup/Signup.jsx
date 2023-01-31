import Navbar from "../../../components/navbar/Navbar";
import './Signup.css';

const Signup = () => {
    return ( 
        <>
        <Navbar />
           <div className="signup-container">
           <div className="img">
                <h1>Register Your Account</h1>
            </div>

        <form action="" className="signup-form">

            <label htmlFor="email">Email Address*</label>
            <input type="email" name="" id="email" required/>

            <label htmlFor="username">Username*</label>
            <input type="text" name="" id="username" required/>

            <label htmlFor="password">Password*</label>
            <input type="password" name="" id="password" required/>

            <button type="submit">Create Account <i className="fa-solid fa-right-to-bracket"></i></button>

        </form>
           </div>
        </>
     );
}
 
export default Signup;