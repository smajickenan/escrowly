import React from 'react';
import './TechnologiesSlider.scss';
import { motion } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import SwiperCore from 'swiper';

SwiperCore.use([Autoplay]);

const TechnologiesSlider = () => {
  return (
    <motion.div 
      className="technologies-slider"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
          duration: 1.4,
          delay: 0.8,
      }}
    >
      <p>
        <motion.span
          initial={{ opacity: 0, transform: "translateX(30px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{
              duration: 0.6,
              delay: 1.4,
          }}
        >
          Technologies
        </motion.span> 
        <motion.span
          initial={{ opacity: 0, transform: "translateX(30px)" }}
          animate={{ opacity: 1, transform: "translateX(0px)" }}
          transition={{
              duration: 0.6,
              delay: 1.6
              ,
          }}
        >
          Powering Escrowly
        </motion.span>
      </p>
      <Swiper
        spaceBetween={25} 
        loop={true} 
        loopAdditionalSlides={1}
        speed={"4000"}
        autoplay={{
          delay: 0, 
          disableOnInteraction: false, 
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
          waitForTransition: true
        }}
        slidesPerView={"auto"}
      >
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-1.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-2.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-3.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-4.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-5.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-6.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-7.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-8.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-9.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-10.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-11.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-12.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-13.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-14.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-15.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-1.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-2.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-3.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-4.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-5.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-6.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-7.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-8.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-9.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-10.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-11.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-12.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-13.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-14.svg" alt="" /></div></SwiperSlide>
            <SwiperSlide style={{ width: '51.38px' }}><div className="coin"><img src="/img/coin-15.svg" alt="" /></div></SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default TechnologiesSlider;


