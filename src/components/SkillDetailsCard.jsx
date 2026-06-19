import { FaEnvelope, FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { IoMdClose } from 'react-icons/io';

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
        category,
    } = skill;

    const [isOpen, setIsOpen] = useState(false);
    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        form.reset();
        toast("Successfully booked a session!")
    }

    return (
        <div className="rounded-2xl shadow-lg overflow-hidden border border-gray-600 hover:shadow-xl transition-all duration-300 my-10">
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8">
                    {/* Image */}
                    <img
                        src={image}
                        alt={skillName}
                        className="max-w-xs sm:max-w-sm md:max-w-md rounded-xl shadow-2xl object-cover"
                    />

                    {/* Content */}
                    <div className="space-y-4 text-center lg:text-left">
                        <h1 className="text-2xl md:text-4xl font-bold">{skillName}</h1>
                        <p className="text-lg text-gray-600">
                            by <span className="font-semibold text-emerald-600">{providerName}</span>
                        </p>

                        <p className="leading-relaxed">{description}</p>

                        {/* Provider Email */}
                        <p className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-400">
                            <FaEnvelope className="text-gray-300" /> {providerEmail}
                        </p>

                        {/* Price, Rating, Slots */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-4">
                            <span className="text-lg font-semibold text-green-600">${price}</span>
                            <span className="flex items-center gap-1 text-yellow-500 font-medium">
                                <FaStar /> {rating}
                            </span>
                            <span className="text-sm text-gray-400">
                                Slots Available: {slotsAvailable}
                            </span>
                            <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-emerald-600 rounded-full">
                                {category}
                            </span>
                        </div>

                        {/* Action Buttons */}
                        <button
                            className="w-full lg:w-auto mt-6 btn bg-emerald-600 text-white hover:bg-black hover:text-emerald-400"
                            onClick={() => setIsOpen(true)}
                        >
                            Book Session
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-base-100 rounded-xl shadow-2xl p-8 w-11/12 max-w-md relative">
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-4 text-gray-500 hover:text-emerald-800 transition-colors font-bold"
                            onClick={() => setIsOpen(false)}
                        >
                            <IoMdClose size={20}></IoMdClose>
                        </button>

                        {/* Form */}
                        <form className="space-y-4" onSubmit={handleForm}>
                            <div>
                                <label className="block text-sm font-medium text-emerald-500 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="input w-full bg-gray-900 border border-emerald-500 text-white placeholder-gray-400 rounded-lg"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-emerald-500 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="input w-full  bg-gray-900 border border-emerald-500 text-white placeholder-gray-400 rounded-lg"
                                    placeholder="Email"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full btn btn-outline border border-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded-lg  transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default SkillDetailsCard;
