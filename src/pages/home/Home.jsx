import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import './Home.css';


const Home = () => {
    return ( 
        <>
            <Navbar />
            <div className="home-container">
                <div className="section1">
                    <h1>Welcome to Samkayzee Blog.</h1>
                    <h3>That's right you only pay legal fees if your case is successful!</h3>
                    <Link to={'/dashboard'}>View Blogs <i class="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
            <Footer />
        </>
     );
}
 
export default Home;