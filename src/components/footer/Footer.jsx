import { Link } from 'react-router-dom';
import './Footer.css';
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useContext } from "react";


const Footer = () => {
     const context = useContext(ThemeContext);
    return ( 
        <>
             <footer className={context.theme === "light"? "footer" : "footer footer_dark"}>
               <div className="section1">
                    <h5>Copyright <i className="fa-regular fa-copyright"></i> 2024 Samkayzee Blog. By Lasisi Abdulsamad</h5>
               </div>

               <div className="links">
                    <Link to={'https://github.com/Samkayzeee'} target={'_blank'}><i className="fa-brands fa-github"></i></Link>
                    <Link to={'www.linkedin.com/in/lasisi-abdulsamad'} target={'_blank'}><i className="fa-brands fa-linkedin"></i></Link>
                    <Link to={'https://twitter.com/Samkayzee1'} target={'_blank'}><i className="fa-brands fa-twitter"></i></Link>

               </div>
             </footer>
        </>
     ); 
}
 
export default Footer;