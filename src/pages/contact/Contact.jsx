import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import DefaultLayout from "../../layout/DefaultLayout";

const Contact = () => {
    const formRef = useRef(null);
    const messageRef = useRef(null);
    const [message, setMessage] = useState("");

    const sendmail  = async(e) => {
        e.preventDefault();
        const form = formRef.current;
        const message_ref = messageRef.current;

        try{
            const result = await emailjs.sendForm('service_fxvcxyj', 'template_vggxabq', form, 'CC6qrRtlQzRCdePxS');
            message_ref.style.color = `rgb(100, 195, 100)`;
            setMessage("Message sent Successfully");
        } catch (error){
            message_ref.style.color = "red";
            setMessage("Theirs was an error sending your mail");
        }

        e.target.reset();
    }
    return (
        <>
            <DefaultLayout>
            <div className="contact-container">
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

                <form ref={formRef} action="" className="contact-form" onSubmit={sendmail} >
                    <input type="text" name="name" id="" placeholder="Your Name" required/>
                    <input type="email" name="email" id="" placeholder="Your Email" required/>
                    <input type="text" name="" id="" placeholder="Subject" required/>
                    <textarea name="message" id="" cols={30} rows={10} placeholder="Message" required></textarea>
                    <p ref={messageRef} className="message">{message}</p>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            </DefaultLayout>
        </>
      );
}
 
export default Contact;