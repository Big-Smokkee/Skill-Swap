import { FaCalendar, FaRocket, FaSearch, FaUser } from "react-icons/fa";

const HowItWorks = () => {
    return (
        <section className="my-24">
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold">
                    How It Works
                </h2>

                <p className="mt-4 text-gray-500">
                    Start learning and sharing skills in just a few steps.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                <div
                    data-aos="fade-up"
                    className="card bg-base-100 shadow-xl"
                >
                    <div className="card-body text-center">
                        <div className="flex items-center justify-center mb-2">
                            <span className="text-6xl"><FaUser></FaUser></span>
                        </div>
                        <h2 className="card-title justify-center">
                            Create Profile
                        </h2>
                        <p>
                            Sign up and create your profile to showcase
                            your skills and interests.
                        </p>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    className="card bg-base-100 shadow-xl"
                >
                    <div className="card-body text-center">
                        <div className="flex items-center justify-center mb-2">
                            <span className="text-6xl"><FaSearch></FaSearch></span>
                        </div>
                        <h2 className="card-title justify-center">
                            Find Skills
                        </h2>
                        <p>
                            Browse skill listings and discover experts
                            in your local community.
                        </p>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    className="card bg-base-100 shadow-xl"
                >
                    <div className="card-body text-center">
                        <div className="flex items-center justify-center mb-2">
                            <span className="text-6xl"><FaCalendar></FaCalendar></span>
                        </div>
                        <h2 className="card-title justify-center">
                            Book Session
                        </h2>
                        <p>
                            Select a provider and schedule a session
                            according to your availability.
                        </p>
                    </div>
                </div>

                <div
                    data-aos="fade-up"
                    className="card bg-base-100 shadow-xl"
                >
                    <div className="card-body text-center">
                        <div className="flex items-center justify-center">
                            <span className="text-6xl"><FaRocket></FaRocket></span>
                        </div>
                        <h2 className="card-title justify-center">
                            Learn & Grow
                        </h2>
                        <p>
                            Improve your skills, gain experience,
                            and connect with others.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;