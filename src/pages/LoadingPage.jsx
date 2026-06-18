import { PiSwapDuotone } from "react-icons/pi";
import 'animate.css';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 space-x-2 text-emerald-400 text-4xl font-bold">
            <span className="animate__animated animate__bounce animate__infinite">L</span>
            <span className="animate-spin">
                <PiSwapDuotone />
            </span>
            <span className="animate__animated animate__bounce animate__infinite">A</span>
            <span className="animate__animated animate__bounce animate__infinite">D</span>
            <span className="animate__animated animate__bounce animate__infinite">I</span>
            <span className="animate__animated animate__bounce animate__infinite">N</span>
            <span className="animate__animated animate__bounce animate__infinite">G</span>
        </div>
    );
};

export default LoadingPage;
