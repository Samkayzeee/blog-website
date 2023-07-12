import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import DefaultLayout from "../../layout/DefaultLayout";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useContext } from "react";

const Contact = () => {
    // ref
    const formRef = useRef(null);
    const EmailRef = useRef(null);


    // context
    const context = useContext(ThemeContext);


    // States
    const [message, setMessage] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [loading, setLoading] = useState(false);
    const [successful, setSuccessful] = useState(true);


    // sending message with valid email function
    const validEMail = () => {
        const Email_Ref = EmailRef.current;
        const emailPattern = /^[^\s@]{6,}@[^\s@]+\.[^\s@]+$/;
        let theEmail = Email_Ref.value;
        let validEmail = emailPattern.test(theEmail);
        setIsEmailValid(validEmail);
    }

    const sendmail  = async(e) => {
        e.preventDefault();
        setLoading(true);
        const form = formRef.current;

        try{

           if (isEmailValid) {
            await emailjs.sendForm('service_fxvcxyj', 'template_vggxabq', form, 'CC6qrRtlQzRCdePxS');
            setLoading(false);
            setSuccessful(true);
            setMessage("Message sent Successfully.");
            e.target.reset();
           }
           else{
            throw new Error("Your Email is Invalid try using normal Email");
           }
        } catch (error){
            setLoading(false);
            setSuccessful(false);
            if(!isEmailValid){
                setMessage(error.message);
            }
            else if(isEmailValid){
                setMessage("Theirs is an error sending your mail check your connection");
            }
        }
    }


    const Loading = () => {
        return (
            <div className="loadingio-spinner-rolling-vc8zers97pd"><div className="ldio-zlxdtiiq8cb">
            <div></div>
            </div></div>
        )
    }
    return (
        <>
            <DefaultLayout>
            <div className={context.theme === "light"? "contact-container" : "contact-container contact_dark_mode"}>
                <div className="section1">
                    <h1>Contact Me</h1>
                </div>

                <div className="contact-information">
                    <h3>Contact Information</h3>

                    <div className="infos">
                        <div className="address">
                                Location: Ibadan, Oyo, Nigeria.
                        </div>

                        <div className="phone">
                            <span>Phone:</span> +2347019665230
                        </div>

                        <div className="email">
                            <span>Email:</span> lasisiabdulsamad7@gmail.com
                        </div>
                    </div>
                </div>

                <form ref={formRef} action="" className="contact-form" onSubmit={sendmail}>
                    <input type="text" name="name" id="" placeholder="Your Name" required/>

                    <input ref={EmailRef} type="email" onBlur={validEMail} name="email" id="" placeholder="Your Email" required/>
                    {!isEmailValid && <p style={{color:"red"}}>Please enter a valid email address</p>}

                    <input type="text" name="subject" id="" placeholder="Subject" required/>
                    
                    <textarea name="message" id="message" cols={30} rows={10} placeholder="Message" required></textarea>

                    {
                        loading ? <Loading /> : <p style={{color: successful ?  "rgb(100, 195, 100)" : "red"}} className="message">{message}</p>
                    }

                    <button type="submit" style={{border: context.theme === "light" ? "none" : "solid 1px white"}}>Send Message</button>
                </form>
                
            </div>
            </DefaultLayout>
        </>
      );
}
 
export default Contact;