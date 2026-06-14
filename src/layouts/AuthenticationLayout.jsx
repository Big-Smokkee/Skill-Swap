import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const AuthenticationLayout = () => {
    return (
        <>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='w-11/12 mx-auto mt-20'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default AuthenticationLayout;