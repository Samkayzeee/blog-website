import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const DetailsPage = () => {

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
            
        </>
     );
}
 
export default DetailsPage;