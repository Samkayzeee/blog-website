import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";


const Layout = ({ Children }) => {
    return ( 
        <>
            <Navbar />
                { Children }
            <Footer />
        </>
     );
}
 
export default Layout;