import { useLoaderData } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import SkillCard from '../components/SkillCard';
import TopRatedProviders from './TopRatedProviders';
import HowItWorks from './HowItWorks';

const Hero = () => {
    const data = useLoaderData();
    console.log(data);

    return (

        <div className="my-10 px-4">
            <div className="text-center">
                <h2 className="text-4xl  bg-linear-to-r from-emerald-400 to-emerald-600 
    bg-clip-text text-transparent font-bold">Swap Skills</h2>
                <h2 className="text-5xl mt-4">Unlock Potential !</h2>
            </div>
            <section className='my-6'>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                >
                    {/* 1st slide */}
                    <SwiperSlide>
                        <div
                            className="hero min-h-[70vh] rounded-2xl"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000')",
                            }}
                        >
                            <div className="hero-overlay bg-black/60 rounded-2xl"></div>

                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-3xl">
                                    <h1 className="mb-5 text-5xl md:text-7xl font-bold">
                                        Learn New Skills From Real People
                                    </h1>

                                    <p className="mb-5 text-lg">
                                        Discover talented mentors, local experts, and passionate
                                        learners ready to share knowledge and help you grow.
                                    </p>

                                    <button className="btn btn-success">
                                        Explore Skills
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* 2nd one */}
                    <SwiperSlide>
                        <div
                            className="hero min-h-[70vh] rounded-2xl"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000')",
                            }}
                        >
                            <div className="hero-overlay bg-black/60 rounded-2xl"></div>

                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-3xl">
                                    <h1 className="mb-5 text-5xl md:text-7xl font-bold">
                                        Share Your Expertise
                                    </h1>

                                    <p className="mb-5 text-lg">
                                        Become a mentor, teach your favorite skills, and build your
                                        reputation within the community.
                                    </p>

                                    <button className="btn btn-success">
                                        Become a Provider
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* 3rd */}
                    <SwiperSlide>
                        <div
                            className="hero min-h-[70vh] rounded-2xl"
                            style={{
                                backgroundImage:
                                    "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2000')",
                            }}
                        >
                            <div className="hero-overlay bg-black/60 rounded-2xl"></div>

                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-3xl">
                                    <h1 className="mb-5 text-5xl md:text-7xl font-bold">
                                        Build Meaningful Connections
                                    </h1>

                                    <p className="mb-5 text-lg">
                                        Connect with learners and mentors, exchange knowledge, and
                                        create opportunities together.
                                    </p>

                                    <button className="btn btn-success ">
                                        Join Skill Swap
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <p className='text-center text-3xl my-8 px-40'>``Connect with people worldwide to teach what you know and learn what you don't. All for free.``</p>

            <div className='flex items-center justify-center'>
                <button className="btn bg-emerald-600 text-white hover:bg-black hover:text-emerald-400 text-lg px-8 py-4">
                    Get Started Now
                </button>
            </div>

            {/* Skill card */}
            <section className='my-20'>
                <SkillCard data={data}></SkillCard>
            </section>
            {/* top rated provider */}
            <section>
                <TopRatedProviders></TopRatedProviders>
            </section>
            {/* How it works */}
            <section>
                <HowItWorks></HowItWorks>
            </section>
        </div>
    );
};

export default Hero;