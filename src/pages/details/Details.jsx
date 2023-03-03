import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";
import './Details.css';
import DefaultLayout from "../../layout/DefaultLayout";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeProvider";


const DetailsPage = () => {
    const { id } = useParams();
    const [blogs, setBlogs] = useState(null);
    const context = useContext(ThemeContext);


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
                    <div className={context.theme === "light"? "detail-page" : "detail-page detail_dark_mode"}>
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