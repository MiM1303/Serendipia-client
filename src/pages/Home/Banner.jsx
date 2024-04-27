import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import "swiper/css/autoplay";
import { Typewriter } from 'react-simple-typewriter'

import {  Autoplay, Pagination, Navigation } from 'swiper/modules';
import "../../App.css"


const Banner = () => {

    

    return (
        <div className="mb-16 relative -z-10">
            <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper z-0">



                <SwiperSlide>
                    <div className="p-10 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('./assets/Bangladesh-cover.jpg')] slide  flex items-center justify-center">
                        {/* <h2 className=" text-center text-base-300 leading-loose font-extrabold text-xl lg:text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('./assets/Thailand-cover.jpg')] slide ">
                        {/* <h2 className="text-center text-base-300 leading-loose font-extrabold text-xl lg:text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('./assets/Indonesia-cover.jpg')] slide ">
                        {/* <h2 className="text-center text-base-300 leading-loose font-extrabold text-xl lg:text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('./assets/Malaysia-cover.jpg')] slide ">
                        {/* <h2 className="text-center text-base-300 leading-loose font-extrabold text-xl lg:text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('./assets/Vietnam-cover.jpg')] slide ">
                        {/* <h2 className="text-center text-base-300 leading-loose font-extrabold text-xl lg:text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-10 bg-[linear-gradient(45deg,rgba(19,19,24,0.50),rgba(19,19,24,0.50)),url('./assets/Cambodia-cover.jpg')] slide ">
                        {/* <h2 className="text-center text-base-300 leading-loose font-extrabold text-xl lg:text-3xl">Escape to scenic places for a vacation or a permanent residence! <br />
                        Book a place now!!</h2> */}
                    </div>
                </SwiperSlide>
            </Swiper>


            <div className='App absolute bottom-[170px] left-[66px] md:left-[210px] lg:left-[530px] lg:bottom-1/2 z-10 font-marker text-2xl md:text-3xl lg:text-5xl text-white text-center'>
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold' }}>
                    Explore the magic of <br /> {' '}
                    <span style={{ color: '#ECF39E', fontWeight: 'bold', font:'marker' }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Bangladesh', 'Thailand', 'Indonesia', 'Malaysia', 'Vietnam', 'Cambodia']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={60}
                        delaySpeed={1600}
                        // onLoopDone={handleDone}
                        // onType={handleType}
                    />
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default Banner;