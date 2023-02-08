import { Link } from "react-router-dom";
import { category } from "../../assets/data/data";
import './category.css';


const Category = () => {
    return ( 
        <>
        <h1 className="specified-categories">CATEGORIES</h1>
            <div className="category-component">
                {
                    category.map((item) => {
                        return(
                            <div className="first" key={item.id}>
                                <div className="main-items">
                                    <img src={item.cover} alt={item.title} />

                                        <div className="flex">
                                            <h4 className="item-category"> {item.category} </h4>
                                            <h1 className="item-title"> {item.title} </h1>
                                            <div className="icons-category">
                                                <Link to={'#'}><i className="fa-brands fa-twitter"></i></Link>
                                                <Link to={'#'}><i className="fa-brands fa-instagram"></i></Link>
                                                <Link to={'#'}><i className="fa-brands fa-facebook-f"></i></Link>
                                            </div>
                                        </div>   
                                </div> 

                            </div>
                        )
                    })
                }
            </div>
        </>
     );
}
 
export default Category;