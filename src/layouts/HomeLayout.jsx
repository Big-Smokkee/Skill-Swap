import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingPage from '../pages/LoadingPage'

const HomeLayout = () => {
    const { state } = useNavigation();
    console.log(state);
    return (
        <>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className='w-11/12 mx-auto'>
                {state === 'loading' ? <LoadingPage></LoadingPage> : <Outlet></Outlet>}

            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;