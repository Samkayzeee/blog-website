import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.css";


const Dashboard = () => {
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
        </>
     );
}
 
export default Dashboard;