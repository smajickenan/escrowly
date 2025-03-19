import React from 'react';
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "./OurVision.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import VisionCard from '../../components/VisionCard/VisionCard';
import Button from '../../components/Button/Button';

const OurVision = () => { 

  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section section-our-vision"
    >
        <div className="container">
            <div className="row sm-direction-column">
                <div className="col col-left">
                    <SectionHeader 
                        label="Our vision"
                        title="Our Vision for a Secure Digital Future"
                        className=""
                    />
                    <p>Our vision is to lead the way in secure crypto transactions by providing innovative solutions that enable businesses and individuals to thrive. We aim to create a future where transparency, trust, and security work seamlessly to empower users in the digital economy</p>
                    <Button 
                        url="#get-started"
                        text="Get Started"
                        icon="/img/btn-arrow-right.svg"
                        delay={0.8}
                    />
                    <div className="powering-escrowly">
                        <p>Technologies Powering Escrowly</p>
                        <Swiper
                            spaceBetween={13.6} 
                            loop={true} 
                            loopAdditionalSlides={1}
                            speed={"1000"}
                            className='powering-escrowly-items'
                            // autoplay={{
                            //     delay: 0, 
                            //     disableOnInteraction: false, 
                            //     pauseOnMouseEnter: false,
                            //     stopOnLastSlide: false,
                            //     waitForTransition: true
                            // }}
                            slidesPerView={"auto"}
                        >
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-7.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-6.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-5.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-8.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-4.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-3.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-8.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-9.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-16.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-2.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-7.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-6.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-5.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-8.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-4.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-3.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-8.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-9.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-16.svg" alt="" /></div></SwiperSlide>
                                <SwiperSlide style={{ width: '51.38px' }}><div className="item"><img src="/img/coin-2.svg" alt="" /></div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="col col-right">
                    <VisionCard
                        icon="/img/icon-vision-1.svg"
                        title="Empowering Businesses"
                        text="We aim to provide businesses with a secure and reliable platform to conduct digital transactions safely and efficiently"
                        url="#url"
                    />
                    <VisionCard
                        icon="/img/icon-vision-2.svg"
                        title="Building Trust"
                        text="Our goal is to create a transparent, fraud-free environment that ensures all parties can engage in crypto transactions with confidence"
                        url="#url"
                    />
                </div>
            </div>
            
        </div>
    </motion.section> 
  );
};

export default OurVision;
