import { useNavigate } from 'react-router';
import errorImg from '../assets/error404.png';

const RoutingErrorPage = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <img src={errorImg} alt="" className='w-130' />
            <div className='flex gap-4'>
                <button className="btn btn-outline border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white mt-4" onClick={() => navigate(-1)} > Go Back</button>
                <button className="btn btn-outline border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white mt-4" onClick={() => navigate('/')}>Go home</button>
            </div>
        </div >
    );
};

export default RoutingErrorPage;