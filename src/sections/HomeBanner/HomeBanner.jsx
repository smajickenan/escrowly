import React, { useState, useRef, useEffect, Suspense } from "react";
import './HomeBanner.scss';
import IconCounter from "../../components/IconCounter/IconCounter";
import TechnologiesSlider from "../../components/TechnologiesSlider/TechnologiesSlider";
import BannerFeatureCard from "../../components/BannerFeatureCard/BannerFeatureCard";
import { motion } from "motion/react";
import AnimatedHeading from "../../components/AnimatedHeading/AnimatedHeading";

// Lazy load FeeCalculator
const FeeCalculator = React.lazy(() => import("../../components/FeeCalculator/FeeCalculator"));

const HomeBanner = function () {
    const videoRef = useRef(null);
    const [isSafari, setIsSafari] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;
        }
    }, []);

    useEffect(() => {
        const isSafari = () => {
            const ua = navigator.userAgent;
            const isIOS = /iPad|iPhone|iPod/.test(ua);
            const isSafariBrowser = ua.includes("Safari") &&
                !ua.includes("Chrome") &&
                !ua.includes("CriOS") &&
                !ua.includes("FxiOS") &&
                !ua.includes("Edg");

            return isSafariBrowser && (isIOS || !/Android|Mobi/i.test(ua));
        };

        setIsSafari(isSafari());
    }, []);

    const handleVideoLoad = () => {
        setIsVideoLoaded(true);
    };

    return (
        <section className="home-banner" role="banner" aria-label="Home Banner">
            <div className="container">
                <div className="row">
                    <div className="col banner-content">
                        {isMobile ? (
                            <AnimatedHeading title="Never buy or sell without Escrowly" />
                        ) : (
                            <AnimatedHeading title="Never buy or sell online without using Escrowly" />
                        )}

                        <p className="color-blue-50">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 2 }}
                            >
                                Escrowly.com is a trusted crypto escrow for safe online deals keeping both buyers and sellers secure.
                            </motion.span>
                        </p>
                        <Suspense fallback={<div className="calculator-loading">Loading calculator...</div>}>
                            <FeeCalculator />
                        </Suspense>
                        <IconCounter
                            imgSrc="/img/icon-calc.svg"
                            num={98}
                            numText="%"
                            description="secure transactions"
                            delay="3"
                            alt="Secure transaction icon"
                        />
                        <IconCounter
                            imgSrc="/img/icon-likes.svg"
                            num={1}
                            numText="M+"
                            description="Users Worldwide"
                            delay="3.4"
                            alt="User count icon"
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
                        {isSafari ? (
                            <img 
                                className="video-placeholder" 
                                src="/images/globe2.png" 
                                alt="Interactive 3D globe showing global transactions"
                               
                            />
                        ) : (
                            <>
                                {!isVideoLoaded && (
                                    <img 
                                        className="video-placeholder" 
                                        src="/images/globe2.png" 
                                        alt="Loading globe animation"
                                      
                                    />
                                )}
                                <video
                                    ref={videoRef}
                                    src="/video/globe-new3.webm"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    type="video/webm"
                                    aria-label="Interactive 3D globe animation showing global transactions"
                                    onLoadedData={handleVideoLoad}
                                    preload="auto"
                                    style={{ display: isVideoLoaded ? 'block' : 'none' }}
                                ></video>
                            </>
                        )}
                        <BannerFeatureCard
                            className="position-1"
                            imgSrc="/img/icon-feature-card-1.svg"
                            title="Safe and Simple Process"
                            list={['Buyer deposits funds in crypto ', 'Seller ships after buyers confirmation']}
                             alt="Safe transaction process icon"
                        />
                        <BannerFeatureCard
                            className="position-2"
                            imgSrc="/img/icon-feature-card-2.svg"
                            title="Reliable Transactions"
                            list={[' Buyer transfers crypto', 'Seller ships once terms are met']}
                            alt="Reliable transaction icon"
                        />
                        <BannerFeatureCard
                            className="position-3"
                            imgSrc="/img/icon-feature-card-3.svg"
                            title="Deal Protection"
                            list={['Buyer pays via Escrowly', 'Seller ships after crypto payment']}
                            alt="Transaction protection icon"
                        />
                        <BannerFeatureCard
                            className="position-4"
                            imgSrc="/img/icon-feature-card-4.svg"
                            title="Buyer-Seller Protection"
                            list={['Escrowly ensures fair resolutions ', 'Funds release when conditions met']}
                            alt="Buyer seller protection icon"
                        />
                        <BannerFeatureCard
                            className="position-5"
                            imgSrc="/img/icon-feature-card-5.svg"
                            title="Secure Smart Contracts"
                            list={['Smart contracts secure transactions', 'Eliminates fraud risks']}
                            alt="Smart contract security icon"
                        />
                        <BannerFeatureCard
                            className="position-6"
                            imgSrc="/img/icon-feature-card-6.svg"
                            title="Instant Crypto Settlement"
                            list={['Fast and secure crypto transfers', 'Funds sent instantly upon verify']}
                            alt="Instant crypto settlement icon"
                        />
                        <div className="globe-wrapper">
                            <div className="globe-pins-1">
                                <img 
                                    className="globe-pin-1" 
                                    src="/img/globe-pin-1.svg" 
                                    alt="Transaction location pin 1"
                                    loading="lazy"
                                />
                                <img 
                                    className="globe-pin-2" 
                                    src="/img/globe-pin-2.svg" 
                                    alt="Transaction location pin 2"
                                    loading="lazy"
                                />
                                <img 
                                    className="globe-pin-3" 
                                    src="/img/globe-pin-3.svg" 
                                    alt="Transaction location pin 3"
                                    loading="lazy"
                                />
                                <div className="globe-line-1">
                                    <img 
                                        src="/img/globe-line-1.svg" 
                                        alt="Transaction connection line 1"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="globe-line-2">
                                    <img 
                                        src="/img/globe-line-2.svg" 
                                        alt="Transaction connection line 2"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="globe-line-3">
                                    <img 
                                        src="/img/globe-line-3.svg" 
                                        alt="Transaction connection line 3"
                                        loading="lazy"
                                    />
                                </div>
                                <img 
                                    src="/img/globe-dots.svg" 
                                    alt="Global transaction network dots"
                                    className="globe-dots"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <TechnologiesSlider />
            </div>
        </section>
    )
}

export default HomeBanner;