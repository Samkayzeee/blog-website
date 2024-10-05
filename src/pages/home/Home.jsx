import { Link } from "react-router-dom";
import './Home.css';
import Category from "../../components/category/category";
import DefaultLayout from "../../layout/DefaultLayout";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useContext } from "react";


const Home = () => {
    const context = useContext(ThemeContext);
    return (
        <>
            <DefaultLayout>
            <div className="home-container" >
                <div className="section1">
                    <div className="inside">
                        <h1 className="">Welcome to Samkayzee Blog.</h1>
                        <h3>That's right you only pay legal fees if your case is successful!</h3>
                        <Link to={'/dashboard'}>View Blogs <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            <div className={context.theme === "light"? null : "category_dark_mode"}>
                <Category />
            </div>

            </DefaultLayout>
        </>
     );
}
 
export default Home;