import { FaDollarSign, FaStar } from "react-icons/fa";

const SkillCard = ({ data }) => {
    return (
        <div className="space-y-6">
            {/* Section Title */}
            <div className="text-xl bg-black w-48 px-6 py-2 rounded-full 
                flex justify-center items-center text-white 
                hover:text-emerald-400 transition-colors duration-300 shadow-md">
                <h4 className="font-semibold">Popular Skills</h4>
            </div>

            {/* Grid of Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((d, idx) => (
                    <div key={idx}
                        className=" rounded-xl shadow-lg p-4 
                        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

                        {/* Image */}
                        <img src={d.image} alt={d.skillName}
                            className="w-full h-40 object-cover rounded-lg mb-4" />

                        {/* Skill Info */}
                        <h2 className="text-lg font-bold  mb-2">
                            {d.skillName}
                        </h2>
                        <div className="flex items-center justify-between">
                            <p className="text-sm "><span className="text-yellow-400"><FaStar></FaStar></span> {d.rating}</p>
                            <p className="text-sm "><span className="text-green-400"><FaDollarSign></FaDollarSign></span> {d.price}</p>
                        </div>

                        {/* CTA Button */}
                        <button className="btn btn-outline border-emerald-500 text-emerald-600 
                            hover:bg-emerald-600 hover:text-white mt-4 w-full">
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
