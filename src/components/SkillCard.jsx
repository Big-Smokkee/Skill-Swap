import { FaDollarSign, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const SkillCard = ({ data }) => {
    // console.log(data)
    return (
        <div className="space-y-6">
            {/* Section Title */}

            <h2 className="text-5xl font-bold text-center">
                Popular Skills
            </h2>

            {/* Grid of Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {data.map((d, i) => (
                    <div key={i}
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
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-400"><FaStar></FaStar></span>
                                <p className="text-sm ">{d.rating}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-green-400"><FaDollarSign></FaDollarSign></span>
                                <p className="text-sm ">{d.price}</p>
                            </div>


                        </div>

                        {/* CTA Button */}
                        <Link to={`/skills/${i}`} className="btn btn-outline border-emerald-500 text-emerald-600 
                            hover:bg-emerald-600 hover:text-white mt-4 w-full">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
