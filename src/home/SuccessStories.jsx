import { FaQuoteLeft, FaStar } from "react-icons/fa";

const SuccessStories = () => {
    return (
        <section className="my-24">
            <div className="text-center mb-14">
                <h2 className="text-5xl font-bold">
                    Success
                    <span className="text-emerald-500"> Stories</span>
                </h2>

                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    Discover how learners and mentors are transforming their
                    lives through meaningful skill exchanges on SkillSwap.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Story 1 */}
                <div className="bg-base-100 border border-emerald-500/20 rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-emerald-500/20 transition-all duration-300">

                    <FaQuoteLeft className="text-4xl text-emerald-500 mb-4" />

                    <div className="flex gap-1 text-emerald-500 mb-4">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                        Through SkillSwap, I joined a Spoken English practice
                        group and improved my confidence in just a few weeks.
                        Now I can comfortably communicate during interviews and presentations.
                    </p>

                    <div className="mt-6">
                        <h3 className="font-bold text-lg">
                            Sarah Ahmed
                        </h3>

                        <p className="text-emerald-500 text-sm">
                            Language Learner
                        </p>
                    </div>
                </div>

                {/* Story 2 */}
                <div className="bg-base-100 border border-emerald-500/20 rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-emerald-500/20 transition-all duration-300">

                    <FaQuoteLeft className="text-4xl text-emerald-500 mb-4" />

                    <div className="flex gap-1 text-emerald-500 mb-4">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                        The React.js mentorship sessions helped me build my
                        first portfolio website. What started as curiosity
                        turned into a real passion for web development.
                    </p>

                    <div className="mt-6">
                        <h3 className="font-bold text-lg">
                            Fahim Khan
                        </h3>

                        <p className="text-emerald-500 text-sm">
                            Aspiring Developer
                        </p>
                    </div>
                </div>

                {/* Story 3 */}
                <div className="bg-base-100 border border-emerald-500/20 rounded-2xl p-8 shadow-lg hover:-translate-y-2 hover:shadow-emerald-500/20 transition-all duration-300">

                    <FaQuoteLeft className="text-4xl text-emerald-500 mb-4" />

                    <div className="flex gap-1 text-emerald-500 mb-4">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                    <p className="text-gray-400 leading-relaxed">
                        Sharing my photography skills on SkillSwap connected me
                        with amazing learners. Teaching others improved my own
                        creativity and expanded my professional network.
                    </p>

                    <div className="mt-6">
                        <h3 className="font-bold text-lg">
                            David Wilson
                        </h3>

                        <p className="text-emerald-500 text-sm">
                            Photography Mentor
                        </p>
                    </div>
                </div>

            </div>

            {/* Bottom Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

                <div className="bg-base-100 rounded-xl p-6 text-center border border-emerald-500/20">
                    <h3 className="text-4xl font-bold text-emerald-500">
                        500+
                    </h3>
                    <p className="text-gray-400 mt-2">
                        Skills Shared
                    </p>
                </div>

                <div className="bg-base-100 rounded-xl p-6 text-center border border-emerald-500/20">
                    <h3 className="text-4xl font-bold text-emerald-500">
                        1K+
                    </h3>
                    <p className="text-gray-400 mt-2">
                        Active Learners
                    </p>
                </div>

                <div className="bg-base-100 rounded-xl p-6 text-center border border-emerald-500/20">
                    <h3 className="text-4xl font-bold text-emerald-500">
                        200+
                    </h3>
                    <p className="text-gray-400 mt-2">
                        Expert Mentors
                    </p>
                </div>

                <div className="bg-base-100 rounded-xl p-6 text-center border border-emerald-500/20">
                    <h3 className="text-4xl font-bold text-emerald-500">
                        98%
                    </h3>
                    <p className="text-gray-400 mt-2">
                        Satisfaction Rate
                    </p>
                </div>

            </div>
        </section>
    );
};

export default SuccessStories;