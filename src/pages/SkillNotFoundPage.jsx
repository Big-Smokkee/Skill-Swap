import { useNavigate } from 'react-router';
import skillNotFoundImg from '../assets/skill-not-found.png';

const SkillNotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <img src={skillNotFoundImg} alt="" className='w-130' />
            <div className='flex gap-4'>
                <button className="btn btn-outline border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white mt-4" onClick={() => navigate(-1)} > Go Back</button>
                <button className="btn btn-outline border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white mt-4" onClick={() => navigate('/')}>Go home</button>
            </div>
        </div >
    );
};

export default SkillNotFoundPage;