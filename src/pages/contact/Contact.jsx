import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <Navbar />
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

                <form action="" className="contact-form">
                    <input type="text" name="" id="" placeholder="Your Name" required/>
                    <input type="email" name="" id="" placeholder="Your Email" required/>
                    <input type="text" name="" id="" placeholder="Subject" required/>
                    <textarea name="" id="" cols={30} rows={10} placeholder="Message" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <Footer />
        </>
      );
}
 
export default Contact;