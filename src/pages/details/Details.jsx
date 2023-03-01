import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import './Details.css';
import DefaultLayout from "../../layout/DefaultLayout";


const DetailsPage = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState(null);


    const navigate = useNavigate();
    let token = localStorage.getItem("token");

   useEffect(() => {
    if (!token) {
        navigate('/login');
    }
    
    let blogs = blog.find((blogs) => blogs.id === parseInt(id));
    if (blogs){
        setBlogs(blogs)
    }
   },[])

    return ( 
        <>
        <DefaultLayout>
        {
                blogs? (
                    <div className="detail-page">
                        <div className="container">
                            <div className="img">
                                <img src={blogs.cover} alt={blogs.title} />
                            </div>

                            <div className="details">
                                <h3> {blogs.title} </h3>
                                <p>
                                    {blogs.desc}
                                </p>

                                <p>Author: Samkayzee</p>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </DefaultLayout>
        </>
     );
}
 
export default DetailsPage;