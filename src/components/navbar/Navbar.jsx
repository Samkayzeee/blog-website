import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return ( 
        <>
           <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>SAMKAYZEE.</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Navbar</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/dashboard'}>Dashboard</Link>
          </li>
          <li>
            <Link className="nav-link" to={'/login'}>Login</Link>
          </li>
          <li>
            <Link className="nav-link" to={'/signup'}>Create an Account</Link>
          </li>
          {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to={'#'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={'/login'}>Login</Link></li>
              <li><Link className="dropdown-item" to={"/signup"}>Signup</Link></li>
              <li><Link className="dropdown-item" to={'#'}>Something else here</Link></li>
            </ul>
          </li> */}
        </ul>
        {/* <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>
</nav>
        </>
     );
}
 
export default Navbar;