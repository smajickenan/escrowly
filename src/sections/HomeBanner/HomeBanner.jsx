import React, { useState, useRef, useEffect } from "react";
import './HomeBanner.scss';
import FeeCalculator from "../../components/FeeCalculator/FeeCalculator";
import IconCounter from "../../components/IconCounter/IconCounter";
import TechnologiesSlider from "../../components/TechnologiesSlider/TechnologiesSlider";
import BannerFeatureCard from "../../components/BannerFeatureCard/BannerFeatureCard";
import { motion } from "motion/react";
import AnimatedHeading from "../../components/AnimatedHeading/AnimatedHeading";

const HomeBanner = function () {
    const videoRef = useRef(null);
    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1; 
        }
    }, []);

    useEffect(() => {
        const isSafariDesktop = () => {
            const ua = navigator.userAgent;
            return (
                ua.includes("Safari") &&
                !ua.includes("Chrome") &&
                !ua.includes("CriOS") &&
                !ua.includes("FxiOS") &&
                !ua.includes("Edg") &&
                !/Mobi|Android|iPhone|iPad|iPod/i.test(ua)
            );
        };
        setIsSafari(isSafariDesktop);
    }, []);

    return (

        <section className="home-banner">
            <div className="container">
                <div className="row">
                    <div className="col banner-content">
                        <AnimatedHeading title="Never buy or sell online without using Escrowly"/>

                        <p className="color-blue-50">
                            <motion.span
                                initial={{ opacity: 0, y: 10}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 2 }}
                            >
                                With Escrowly.com, you can buy and sell anything online while secuting your
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 10}}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 2.2 }}
                            >
                                transactions with zero chargeback risk. The real future of safe payments.
                            </motion.span>
                        </p>
                        <FeeCalculator/>
                        <IconCounter 
                            imgSrc="/img/icon-calc.svg" 
                            num={98}
                            numText="%" 
                            description="secure transactions" 
                            delay="3"
                        />
                        <IconCounter 
                            imgSrc="/img/icon-likes.svg" 
                            num={1}
                            numText="M+" 
                            description="Users Worldwide" 
                            delay="3.4"
                        />
                    </div>
                    <motion.div 
                        className="banner-globe"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 1,
                            delay: 0.8,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                        }}
                    >
                            {/* <img className="video-placeholder" src="/images/globe2.png" alt="Globe" /> */}
                        {isSafari ? (
                            <img className="video-placeholder" src="/images/globe2.png" alt="Globe" />
                        ) : (
                            <video 
                                ref={videoRef}
                                src="/video/globe.webm" 
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                                type="video/webm"
                            ></video>
                        )}
                        <BannerFeatureCard 
                            className="position-1"
                            imgSrc="/img/icon-feature-card-1.svg" 
                            title="Safe and Simple Process" 
                            list={['Buyer deposits funds in cryptocurrency ', 'Seller ships after buyer’s confirmation']} 
                        />
                        <BannerFeatureCard 
                            className="position-2"
                            imgSrc="/img/icon-feature-card-2.svg" 
                            title="Reliable Transactions" 
                            list={[' Buyer transfers crypto', 'Seller ships once terms are met']} 
                        />
                        <BannerFeatureCard 
                            className="position-3"
                            imgSrc="/img/icon-feature-card-3.svg" 
                            title="Total Protection for <br> Transactions" 
                            list={['Buyer pays via Escrowly', 'Seller ships after payment']} 
                        />

                        <BannerFeatureCard 
                            className="position-4"
                            imgSrc="/img/icon-feature-card-4.svg" 
                            title="Buyer-Seller Protection" 
                            list={['Escrowly ensures fair resolutions ', 'Funds release when conditions met']} 
                        />
                        <BannerFeatureCard 
                            className="position-5"
                            imgSrc="/img/icon-feature-card-5.svg" 
                            title="Secure Smart Contracts" 
                            list={['Smart contracts secure transactions', 'Eliminates fraud risks']} 
                        />
                        <BannerFeatureCard 
                            className="position-6"
                            imgSrc="/img/icon-feature-card-6.svg" 
                            title="Instant Crypto Settlement" 
                            list={['Fast and secure crypto transfers', 'Funds sent instantly upon verify']} 
                        />
                        <div className="globe-wrapper">

                            <div className="globe-pins-1">
                                <img className="globe-pin-1" src="/img/globe-pin-1.svg" alt=""/>
                                <img className="globe-pin-2" src="/img/globe-pin-2.svg" alt=""/>
                                <img className="globe-pin-3" src="/img/globe-pin-3.svg" alt=""/>
                                <div className="globe-line-1"><img src="/img/globe-line-1.svg" alt=""/></div>
                                <div className="globe-line-2"><img src="/img/globe-line-2.svg" alt=""/></div>
                                <div className="globe-line-3"><img src="/img/globe-line-3.svg" alt=""/></div>
                                <img src="/img/globe-dots.svg" alt="" className="globe-dots" />
                                

                            </div>
                        </div>
                    </motion.div>
                </div>
                <TechnologiesSlider/>
            </div>
        </section>
    )
}

export default HomeBanner;