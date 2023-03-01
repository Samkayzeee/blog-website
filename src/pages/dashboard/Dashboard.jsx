import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.css";
import DefaultLayout from "../../layout/DefaultLayout";


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
            <DefaultLayout>
            <div className="dashboard-section1">
                <div className="inside">
                        <h1>Welcome!</h1>
                        <h3> You can now view Available Blogs </h3>
                    </div>
                </div>

                <div className="cards">
                    <Card />
                </div>
            </DefaultLayout>
        </>
     );
}
 
export default Dashboard;