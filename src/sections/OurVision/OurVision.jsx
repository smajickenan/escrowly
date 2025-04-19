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
                        title="Our Vision for a Secure Crypto World"
                        className=""
                    />
                    <p>We developed our platform to establish trust for every crypto payment through which users can securely deal and conduct transactions despite concerns about loss, scams, or counterfeit transactions. Users who need USDT and USDC Stablecoin escrow along with business-to-business crypto payment solutions should choose Escrowly as their secure financial transaction platform</p>
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
                        title="Registered, Compliant & Secure"
                        text="Our commitment to trustworthiness exists beyond words - we demonstrate it consistently. As an authentic Money Services Business (MSB), Escrowly holds a legitimate registration from the U.S. Financial Crimes Enforcement Network (FinCEN). Through its registration with FinCEN our users experience security knowing they work with a platform which strictly follows anti-money laundering AML and Know Your Customer KYC rules."
                        url="/sign-up"
                    />
                    <VisionCard
                        icon="/img/icon-vision-2.svg"
                        title="Mission"
                        text="Our team strives to build technologies that help create an electronic payment system which functions instantaneously, provides absolute security, and is generally accepted worldwide."
                        url="/sign-up"
                    />
                </div>
            </div>
            
        </div>
    </motion.section> 
  );
};

export default OurVision;
