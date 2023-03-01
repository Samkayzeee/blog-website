import { Link } from "react-router-dom";
import './Home.css';
import Category from "../../components/category/category";
import DefaultLayout from "../../layout/DefaultLayout";


const Home = () => {
    return ( 
        <>
            <DefaultLayout>
            <div className="home-container">
                <div className="section1">
                    <div className="inside">
                        <h1>Welcome to Samkayzee Blog.</h1>
                        <h3>That's right you only pay legal fees if your case is successful!</h3>
                        <Link to={'/dashboard'}>View Blogs <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            <div className="category-section">
                <Category />
            </div>

            </DefaultLayout>
        </>
     );
}
 
export default Home;