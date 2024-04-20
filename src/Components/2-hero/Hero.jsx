
import s1 from "/./public/s1.webp";
import s2 from "/./public/s2.webp";
import s3 from "/./public/s3.webp";
import s4 from "/./public/s4.webp";
import { Element } from "react-scroll";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Hero() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <Element name="home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={false}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative flex  justify-center items-center w-full xl:h-[800px] lg:h-[739px] h-80">
            <img src={s1} alt="" className=""/>
            <div className="absolute text-white uppercase text-center">
              <h1 className="text-xs sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl font-light md:mb-5 lg:mb-6 xl:mb-7 font-italian ">
                Welcome to
              </h1>
              <p className="text-lg sm:text-base md:text-3xl lg:text-7xl xl:text-8xl mb-2 md:mb-5 lg:mb-6 xl:mb-7 ">
                pato place
              </p>
              <a
                className="text-[12px] sm:text-base  p-1 md:p-3  bg-red-700 hover:bg-red-600 font-light "
                href="/"
              >
                Take A Reservation
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex  justify-center items-center w-full xl:h-[800px]  lg:h-[739px] h-80 ">
            <img src={s2} alt="" className="h-fit" />
            <div className="absolute text-white uppercase text-center">
              <h1 className="text-xs sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl font-light md:mb-5 lg:mb-6 xl:mb-7 font-italian ">
                Our speacial menu
              </h1>
              <p className="text-lg sm:text-base md:text-3xl lg:text-7xl xl:text-8xl mb-2 md:mb-5 lg:mb-6 xl:mb-7 ">
                pato place
              </p>
              <a
                className="text-[12px] sm:text-base  p-1 md:p-3  bg-red-700 hover:bg-red-600 font-light "
                href="/"
              >
                Check Out Our Menu
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex  justify-center items-center w-full xl:h-[800px] lg:h-[739px] h-80 ">
            <img src={s3} alt="" className="h-fit"/>
            <div className="absolute text-white uppercase text-center">
              <h1 className="text-xs sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl font-light md:mb-5 lg:mb-6 xl:mb-7 font-italian ">
                Pictures from
              </h1>
              <p className="text-lg sm:text-base md:text-3xl lg:text-7xl xl:text-8xl mb-2 md:mb-5 lg:mb-6 xl:mb-7 ">
                pato place
              </p>
              <a
                className="text-[12px] sm:text-base  p-1 md:p-3  bg-red-700 hover:bg-red-600 font-light "
                href="/"
              >
                GALLERY
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex  justify-center items-center w-full xl:h-[800px] lg:h-[739px] h-80 ">
            <img src={s4} alt="" className="h-32" />
            <div className="absolute text-white uppercase text-center">
              <h1 className="text-xs sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl font-light md:mb-5 lg:mb-6 xl:mb-7 font-italian ">
                story of
              </h1>
              <p className="text-lg sm:text-base md:text-3xl lg:text-7xl xl:text-8xl mb-2 md:mb-5 lg:mb-6 xl:mb-7 ">
                pato place
              </p>
              <a
                className="text-[12px] sm:text-base  p-1 md:p-3  bg-red-700 hover:bg-red-600 font-light "
                href="/"
              >
                ABOUT US
              </a>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress hidden" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </Element>
  );
}

export default Hero;
