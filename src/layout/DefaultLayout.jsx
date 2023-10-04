import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { ThemeContext } from "../contexts/ThemeProvider";
import { useContext } from "react";


const DefaultLayout = ({ children }) => {

    const context = useContext(ThemeContext);
    return ( 
        <>
            <Navbar />
                <main style={{backgroundColor: context.theme === 'light'? null: 'rgb(0, 0, 12)'}}>
                    { children }
                </main>

            <Footer />
        </>
     );
}
 
export default DefaultLayout;