import { Link } from "react-router-dom";
import { blog } from "../../assets/data/data";
import './Card.css';

const Card = () => {
    return ( 
        <>
            <div className="blog-container">
                <div className="main-container">
                    {
                        blog.map((item) => {
                            return(
                                <div key={item.id} className="item">
                                    <div className="img">
                                        <img src={item.cover} alt={item.title} />
                                    </div>

                                    <div className="details">
                                            <div className="tag">
                                                <a href=""># {item.category} </a>
                                            </div>

                                        <div className="title">
                                            <Link to={`/details/${item.id}`}>
                                                    <h3> {item.title} </h3>
                                            </Link>
                                            <p> {item.desc.slice(0, 180)}... </p>
                                        </div>
                                    </div>

                                    <div className="date">
                                        <h5> <i className="fa-solid fa-calendar-days"></i> {item.date} </h5>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
     );
}
 
export default Card;