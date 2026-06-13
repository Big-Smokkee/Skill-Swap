import { Outlet, useLoaderData } from 'react-router';
import Navbar from '../components/Navbar';


const HomeLayout = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;