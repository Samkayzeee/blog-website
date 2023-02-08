import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.css";


const Dashboard = () => {
    const [api, setApi] = useState([]);
    const navigate = useNavigate();
    let token = localStorage.getItem("token");

   useEffect(() => {
    if (!token) {
        navigate('/login');
    }

   },[])


    return ( 
        <>
            <Navbar />
                <div className="dashboard-section1">
                <div className="inside">
                        <h1>Welcome!</h1>
                        <h3> You can now view Available Blogs </h3>
                    </div>
                </div>

                <div className="cards">
                    <Card />
                </div>
            <Footer />
        </>
     );
}
 
export default Dashboard;