import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';
import { useRef, useEffect } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useContext } from "react";


const Navbar = () => {

const navigate = useNavigate();
const dropdown_ul = useRef(null);
const context = useContext(ThemeContext);


const token = localStorage.getItem("token");

  const Logout = () => {
    localStorage.removeItem("token");
    navigate('/');
  }


  const dropdown = () => {
    let drop = dropdown_ul.current;
    if(drop.style.display === ""){
      drop.style.display = "block";
    }
    else if (drop.style.display === "block"){
      drop.style.display = ""
    }
  }

  useEffect(() => {
    window.onscroll = () => {
        let drop = dropdown_ul.current
        drop.style.display = ""
    }
},[])

    return ( 
        <>
                <nav className="Navbar">
                  <div className="logo">
                      <Link to={'/'}>SAMKAYZEE.</Link>
                  </div>
                  
                  <div ref={dropdown_ul} className="links">
                    <ul>
                      <li> <Link to={'/'}>Home</Link> </li>
                      <li> <Link to={'/contact'}>Contact</Link> </li>
                      <li> <Link to={'/dashboard'}>Blogs</Link> </li>
                      <li onClick={() => context.setTheme(context.theme === "light" ? "dark" : "light")} className="dark_mode_toggle">
                          <i className={context.theme === "light"? "fa solid fa-toggle-on": "fa solid fa-toggle-off"}></i>
                          <span>{context.theme === "light"? "Dark Mode" : "Light Mode"}</span>
                      </li>
                   
                      <li className="account">
                        {
                          token?
                          <button onClick={Logout} className="log out">Log Out</button>:<Link to={'/login'}>Log in</Link>
                        }
                      </li>
                      
                      <li className="account">
                        {
                          token?
                          null: <Link to={'/signup'}>Signup</Link>
                        }
                      </li>
                       </ul>
                  </div>

                  <div onClick={dropdown} className="dropdown_menu">
                      <i className="fa-solid fa-bars"></i>
                  </div>
                </nav>
        </>
     );
}
 
export default Navbar;