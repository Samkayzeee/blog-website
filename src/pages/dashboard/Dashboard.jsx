import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
            <div className="dashboard-container">
                This is the dashboard page
            </div>
            <Footer />
        </>
     );
}
 
export default Dashboard;