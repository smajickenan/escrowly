import React from "react";
import { motion } from "motion/react";
import "./Testimonials.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';

const Testimonials = () => {

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section section-testimonials"
        >
            <div className="container">
                <SectionHeader
                    label="Testimonials"
                    title="Clients Review"
                />

                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.6, delay: 0 } }
                    }}
                >
                    <Swiper
                        speed={"1000"}
                        slidesPerView={"auto"}
                        className="overflow-visible"
                        navigation={true}
                        modules={[Navigation, Scrollbar]}
                        scrollbar={{
                            hide: false,
                            dragSize: 250
                        }}
                        breakpoints={{
                            320: {
                                spaceBetween: 12,
                                scrollbar: {
                                    hide: false,
                                    dragSize: 101
                                }
                            },
                            768: {
                                spaceBetween: 20,
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
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }
                                }}
                            >
                                <TestimonialCard
                                    img="/images/client-1.jpg"
                                    title="Reliable and Secure Payment Solutions!"
                                    text="Escrowly made everything so simple and secure. I can focus on growing my business without worrying about payments!"
                                    name="John Doe"
                                    address="New York, US"
                                />
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 'auto' }}>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.7 } }
                                }}
                            >
                                <TestimonialCard
                                    img="/images/client-2.jpg"
                                    title="Trustworthy Service for Online Sellers!"
                                    text="As an online seller, I’ve never felt more confident. Escrowly's seamless platform ensures every transaction is safe!"
                                    name="Sarah Lee"
                                    address="London, UK"
                                />
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 'auto' }}>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.9 } }
                                }}
                            >
                                <TestimonialCard
                                    img="/images/client-3.jpg"
                                    title="Fast and Efficient Payment Processing!"
                                    text="Working with Escrowly has been a game changer. Fast, reliable, and secure payments – exactly what I needed!"
                                    name="Mark Taylor"
                                    address="Toronto, Canada"
                                />
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 'auto' }}>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.1 } }
                                }}
                            >
                                <TestimonialCard
                                    img="/images/client-1.jpg"
                                    title="Reliable and Secure Payment Solutions!"
                                    text="Escrowly made everything so simple and secure. I can focus on growing my business without worrying about payments!"
                                    name="John Doe"
                                    address="New York, US"
                                />
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 'auto' }}>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.3 } }
                                }}
                            >
                                <TestimonialCard
                                    img="/images/client-2.jpg"
                                    title="Trustworthy Service for Online Sellers!"
                                    text="As an online seller, I’ve never felt more confident. Escrowly's seamless platform ensures every transaction is safe!"
                                    name="Sarah Lee"
                                    address="London, UK"
                                />
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 'auto' }}>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.5 } }
                                }}
                            >
                                <TestimonialCard
                                    img="/images/client-3.jpg"
                                    title="Fast and Efficient Payment Processing!"
                                    text="Working with Escrowly has been a game changer. Fast, reliable, and secure payments – exactly what I needed!"
                                    name="Mark Taylor"
                                    address="Toronto, Canada"
                                />
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 'auto' }}>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.7 } }
                                }}
                            >
                                <TestimonialCard
                                    img="/images/client-3.jpg"
                                    title="Escrowly gave me peace of mind"
                                    text="I once used Escrowly for a high-risk Bitcoin exchange and was amazed by the speed and transparency. Since then, it's the only platform I trust for crypto transactions."
                                    name="James Kenedy"
                                    address=" Crypto Trader, UK"
                                />
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 'auto' }}>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.9 } }
                                }}
                            >
                                <TestimonialCard
                                    img="/images/client-3.jpg"
                                    title="Finally - a platform that protects NFT creators!"
                                    text="As an NFT creator, I've dealt with scams before. With Escrowly, my funds stay safe until receipt is confirmed  it's the only escrow service I trust."
                                    name="Adam Kirschner"
                                    address="NFT Artist, USA"
                                />
                            </motion.div>
                        </SwiperSlide>
                    </Swiper>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Testimonials;
