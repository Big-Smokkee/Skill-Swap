import { useLoaderData } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className="my-14 px-4">
            <div className="text-center">
                <h2 className="text-4xl  bg-linear-to-r from-emerald-400 to-emerald-600 
    bg-clip-text text-transparent font-bold">Swap Skills</h2>
                <h2 className="text-5xl mt-4">Unlock Potential !</h2>
            </div>

            <Swiper className='mt-4'
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    data.map(data => <SwiperSlide>
                        <img src={data.image} alt="" className='rounded-lg w-full h-80 object-cover' />
                        <h2 className="text-2xl text-center mt-2 
    bg-linear-to-r from-emerald-400 to-emerald-600 
    bg-clip-text text-transparent font-bold">
                            {data.skillName}
                        </h2>
                    </SwiperSlide>)
                }
            </Swiper>
            <p className='text-center text-3xl my-8 px-40'>``Connect with people worldwide to teach what you know and learn what you don't. All for free.``</p>

            <div className='flex items-center justify-center'>
                <button className="btn bg-emerald-600 text-white hover:bg-black hover:text-emerald-400 text-lg px-8 py-4">
                    Get Started Now
                </button>

            </div>

        </div>
    );
};

export default Hero;