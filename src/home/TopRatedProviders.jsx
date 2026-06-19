import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { PiStudentFill } from "react-icons/pi";


const TopRatedProviders = () => {
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        fetch("/providers.json")
            .then((res) => res.json())
            .then((data) => setProviders(data));
    }, []);

    return (
        <section className="my-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-emerald-500">
                    Top Rated Providers
                </h2>

                <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
                    Connect with our most trusted mentors and
                    skill providers.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {providers.map((provider) => (
                    <div
                        key={provider.id}
                        className="card bg-base-100 shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                    >
                        <div className="flex justify-center">
                            <img
                                src={provider.image}
                                alt={provider.name}
                                className="w-28 h-28 rounded-full object-cover "
                            />
                        </div>


                        <div className="card-body text-center">
                            <h2 className="card-title justify-center">
                                {provider.name}
                            </h2>

                            <p className="font-medium text-emerald-500">
                                {provider.skill}
                            </p>

                            <div className="flex justify-center gap-2 flex-wrap mt-2">
                                <div className="badge badge-outline">
                                    <span className="text-yellow-500"><FaStar></FaStar></span>
                                    <p>{provider.rating}</p>
                                </div>

                                <div className="badge badge-outline">

                                    <span className="text-yellow-500"><PiStudentFill></PiStudentFill></span>
                                    <p>{provider.students}</p>

                                </div>

                                <div className="badge badge-outline">
                                    <span className="text-yellow-500"><GrValidate></GrValidate></span>
                                    <p>{provider.experience}</p>
                                </div>
                            </div>

                            <div className="card-actions justify-center mt-4">
                                <button className="btn btn-outline border-emerald-500 text-emerald-600 
                            hover:bg-emerald-600 hover:text-white mt-4 w-full">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopRatedProviders;