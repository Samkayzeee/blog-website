import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import "./Dashboard.css";


const Dashboard = () => {
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