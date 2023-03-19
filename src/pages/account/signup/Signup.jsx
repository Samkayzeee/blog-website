import { useState } from "react";
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../../contexts/ThemeProvider';




const Signup = () => {
   const context = useContext(ThemeContext);
   const navigate = useNavigate();
   const [email, setEmail] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const register = (e) => {
      e.preventDefault();

      let signupData = {
         email:email,
         username:username,
         password:password,
      }
      let token = true;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("Userdata", JSON.stringify(signupData));

      e.target.reset();
      navigate('/dashboard');
   }

    return ( 
        <>
        <div className={context.theme === "light"? "signup-container" : "signup-container signup_dark_mode"}>
           <div className="img">
                <h1>Register Your Account</h1>
            </div>

        <form action="" className="signup-form" onSubmit={register}>

            <label htmlFor="email">Email Address*</label>
            <input onChange={(e) => {setEmail(e.target.value)}} type="email" name="" id="email" required/>

            <label htmlFor="username">Username*</label>
            <input onChange={(e) => {setUsername(e.target.value)}} type="text" name="" id="username" required/>

            <label htmlFor="password">Password*</label>
            <input onChange={(e) => {setPassword(e.target.value)}} type="password" name="" id="password" required minLength={8}/>

            <button type="submit">Create Account <i className="fa-solid fa-right-to-bracket"></i></button>

        </form>

           </div>
        </>
     );
}
 
export default Signup;