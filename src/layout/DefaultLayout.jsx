import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";


const DefaultLayout = ({ children }) => {
    return ( 
        <>
            <Navbar />
                <main>
                    { children }
                </main>

            <Footer />
        </>
     );
}
 
export default DefaultLayout;