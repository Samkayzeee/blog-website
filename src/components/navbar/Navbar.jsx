import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
const navigate = useNavigate();


const token = localStorage.getItem("token");

  const Logout = () => {
    localStorage.removeItem("token");
    navigate('/');
  }
    return ( 
        <>
                <nav className="Navbar">
                  <div className="logo">
                      <Link to={'/'}>SAMKAYZEE.</Link>
                  </div>
                  
                  <div className="links">
                    <ul>
                      <li> <Link to={'/'}>Home</Link> </li>
                      <li> <Link to={'/contact'}>Contact</Link> </li>
                      <li> <Link to={'/dashboard'}>Blogs</Link> </li>
                    </ul>
                  </div>

                  <div className="account">
                      {
                        token?
                        <button onClick={Logout} className="log out">Log Out</button>:<Link to={'/login'}>Log in</Link>
                      }

                      {
                        token?
                        null: <Link to={'/signup'}>Signup</Link>
                      }
                  </div>
                </nav>
        </>
     );
}
 
export default Navbar;