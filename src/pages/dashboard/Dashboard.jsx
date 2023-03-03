import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import "./Dashboard.css";
import DefaultLayout from "../../layout/DefaultLayout";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";


const Dashboard = () => {
    const context = useContext(ThemeContext);
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

                <div className={context.theme === "light"? "cards" : "cards card_dark_mode" }>
                    <Card />
                </div>
            </DefaultLayout>
        </>
     );
}
 
export default Dashboard;