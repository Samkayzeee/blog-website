import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
                This is the Dashboard page
                {
                    api.map((news) => {
                       return(
                        <div key={news.title}> 
                            <div className="single-news">
                                <h1>{news.title}</h1>
                                <p>{news.description}</p>
                                <img src={news.image} alt="" />
                            </div>
                         </div>
                       )
                    })
                }
            </div>
        </>
     );
}
 
export default Dashboard;