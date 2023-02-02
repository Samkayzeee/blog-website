import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import './Home.css';


const Home = () => {
    return ( 
        <>
            <Navbar />
            <div className="home-container">
                This is the home page
            </div>
        </>
     );
}
 
export default Home;