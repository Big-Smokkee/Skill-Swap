import { FaEnvelope, FaStar } from 'react-icons/fa';

const SkillDetailsCard = ({ skill }) => {
    const {
        skillName,
        providerName,
        providerEmail,
        price,
        rating,
        slotsAvailable,
        description,
        image,
        category
    } = skill;

    return (
        <div className=" rounded-2xl shadow-lg overflow-hidden border border-gray-600 hover:shadow-xl transition-all duration-300 my-10">
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8">

                    {/* Image */}
                    <img
                        src={image}
                        alt={skillName}
                        className="max-w-md rounded-xl shadow-2xl object-cover"
                    />

                    {/* Content */}
                    <div className="space-y-4 text-center lg:text-left">
                        <h1 className="text-4xl font-bold ">{skillName}</h1>
                        <p className="text-lg text-gray-600">
                            by <span className="font-semibold text-emerald-600">{providerName}</span>
                        </p>

                        <p className=" leading-relaxed">{description}</p>

                        {/* Provider Email */}
                        <p className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
                            <FaEnvelope className="text-gray-300" /> {providerEmail}
                        </p>

                        {/* Price, Rating, Slots */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4">
                            <span className="text-lg font-semibold text-green-600">
                                ${price}
                            </span>
                            <span className="flex items-center gap-1 text-yellow-500 font-medium">
                                <FaStar /> {rating}
                            </span>
                            <span className="text-sm text-gray-400">
                                Slots Available: {slotsAvailable}
                            </span>
                            <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                                {category}
                            </span>
                        </div>

                        {/* Action Button */}
                        <button className=" w-full lg:w-auto mt-6 btn bg-emerald-600 text-white hover:bg-black hover:text-emerald-400">
                            Book Session
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDetailsCard;
