import React, { useRef } from 'react';
import { motion } from "motion/react";
import "./OurServices.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServiceFeatureCard from "../../components/ServiceFeatureCard/ServiceFeatureCard";
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';
import Button from '../../components/Button/Button';

const OurServices = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    const handleSwiper = (swiper) => {
        swiperRef.current = swiper;
        if (swiper && swiper.params.navigation) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section section-our-services"
        >
            <div className="container">
                <div className="row sm-direction-column">
                    <div className="col">
                        <SectionHeader
                            label="Our Services"
                            title="Overview <br>of Escrowly Services"
                            className="mb-20 xs-mb-0 "
                        />
                    </div>
                    <div className="col">
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 70 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }
                            }}
                            className="mt-20 sm-font-16"
                        >
                            Our services do not stop at cryptocurrencies. Escrowly.com is more than equipped to be your ideal escrow service for property sales, escrow for car dealership payments, and escrow service for high-value assets.
                        </motion.p>
                    </div>
                </div>

                <div className="our-services-carousel-wrapper">
                    <div className="carousel-nav">
                        <div ref={prevRef} className="swiper-button-prev"></div>
                        <div ref={nextRef} className="swiper-button-next"></div>
                    </div>
                    <Button
                        url="/services"
                        text="All Services"
                        icon="/img/btn-arrow-right.svg"
                        delay={2}
                    />
                    <motion.div
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.6, delay: 0.8 } }
                        }}
                    >
                        <Swiper
                            onSwiper={handleSwiper}
                            speed={"1000"}
                            slidesPerView={"auto"}
                            modules={[Navigation, Scrollbar]}
                            scrollbar={{
                                hide: false,
                                dragSize: 250
                            }}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            breakpoints={{
                                320: {
                                    spaceBetween: 12,
                                    // slidesPerView:"auto",
                                    scrollbar: {
                                        hide: false,
                                        dragSize: 101
                                    }
                                },
                                768: {
                                    spaceBetween: 20,
                                    // slidesPerView:2,
                                    scrollbar: {
                                        hide: false,
                                        dragSize: 250
                                    }
                                },
                                1024: {
                                    spaceBetween: 20,
                                    // slidesPerView:3,
                                    scrollbar: {
                                        hide: false,
                                        dragSize: 250
                                    }
                                },
                                1280: {
                                    spaceBetween: 20,
                                    // slidesPerView:4,
                                    scrollbar: {
                                        hide: false,
                                        dragSize: 250
                                    }
                                }
                            }}
                        >
                            <SwiperSlide style={{ width: 'auto' }}>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: 70 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }
                                    }}
                                >
                                    <ServiceFeatureCard
                                        icon="/img/service-feature-1.svg"
                                        title="Escrow for Property Sales"
                                        text="Escrowly services caters to property sales and real estate closings for domestic and cross-border transactions to international clients. Our services encompasses conventional escrow functions which operates with the same digital precision and security"
                                        className="feature-blue"
                                    />
                                </motion.div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 'auto' }}>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: 70 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.2 } }
                                    }}
                                >
                                    <ServiceFeatureCard
                                        icon="/img/service-feature-2.svg"
                                        image="/images/service-feature-image-2.jpg"
                                        title="Real Estate Transactions"
                                        className="feature-image"
                                    />
                                </motion.div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 'auto' }}>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: 70 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.4 } }
                                    }}
                                >
                                    <ServiceFeatureCard
                                        icon="/img/service-feature-3.svg"
                                        image="/images/service-feature-image-3.jpg"
                                        title="Digital Asset Protection"
                                        text="We also manage escrow for jewelry, luxury watches and more"
                                        className="feature-bg"
                                    />
                                </motion.div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 'auto' }}>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: 70 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.6 } }
                                    }}
                                >
                                    <ServiceFeatureCard
                                        icon="/img/service-feature-4.svg"
                                        image="/images/service-feature-image-4.jpg"
                                        title="Escrowly for Merchandise"
                                        className="feature-image"
                                    />
                                </motion.div>
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 'auto' }}>
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, x: 70 },
                                        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.8 } }
                                    }}
                                >
                                    <ServiceFeatureCard
                                        icon="/img/service-feature-1.svg"
                                        title="Secure Escrowly Services"
                                        text="We provide secure payment solutions for a wide range of cryptocurrency transactions, ensuring safety for both buyers and sellers. Our platform acts as a neutral third party, holding digital assets until all terms are met, fostering trust and confidence in every transaction"
                                        className="feature-blue"
                                    />
                                </motion.div>
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default OurServices;
