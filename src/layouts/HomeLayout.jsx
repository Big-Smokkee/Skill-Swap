import { Outlet, useLoaderData } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const HomeLayout = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;