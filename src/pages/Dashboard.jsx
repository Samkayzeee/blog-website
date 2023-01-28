import axios from "axios";

const Dashboard = () => {
const work = async() => {
    const get  = await axios.get("https://api.unsplash.com/")
    const done = get.data
    console.log(done);
}
work();
    return ( 
        <>
            This is the Dashboard
        </>
     );
}
 
export default Dashboard;