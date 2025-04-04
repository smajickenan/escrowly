import React from "react";
import { motion } from "motion/react";
import "./HowItWorks.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import HowItWorksCard from "../../components/HowItWorksCard/HowItWorksCard";
import { Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';

const HowItWorks = () => {

  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section section-how-it-works"
    >
        <div className="container">
            <SectionHeader 
                label="How It Works"
                title="How Escrowly Ensures Safe <br> and Secure Deals"
                className="mb-40 xs-mb-30"
            />

            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.6, delay: 0.5 } }
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
                            scrollbar:{
                                hide: false,
                                dragSize: 101
                            }
                        }, 
                        768: { 
                            spaceBetween: 20,
                            scrollbar:{
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
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.6 } }
                                }}
                            >
                                <HowItWorksCard 
                                    num="01"
                                    img="/img/icon-hiw-1.svg"
                                    title="Buyer & Seller Agree"
                                    text="The buyer selects a product or service and agrees on terms with the seller"
                                />
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 'auto' }}>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 70 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.8} }
                                }}
                            >
                                <HowItWorksCard 
                                    num="02"
                                    img="/img/icon-hiw-2.svg"
                                    title="Buyer Pays Escrowly"
                                    text="The buyer sends cryptocurrency payment to Escrowly, where it's securely held"
                                />
                            </motion.div>
                        </SwiperSlide>
                        <SwiperSlide style={{ width: 'auto' }}>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, x: 70 },
                                    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }
                                }}
                            >
                                <HowItWorksCard 
                                    num="03"
                                    img="/img/icon-hiw-3.svg"
                                    title="Seller Delivers"
                                    text="The seller ships the product or provides the agreed-upon service"
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
                                <HowItWorksCard 
                                    num="04"
                                    img="/img/icon-hiw-4.svg"
                                    title="Buyer Approves"
                                    text="The buyer inspects the item or service and confirms satisfaction"
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
                                <HowItWorksCard 
                                    num="05"
                                    img="/img/icon-hiw-5.svg"
                                    title="Seller Gets Paid"
                                    text="Escrowly releases the cryptocurrency funds to the seller, completing the transaction"
                                />
                            </motion.div>
                        </SwiperSlide>
                </Swiper>
            </motion.div>
        </div>
    </motion.section> 
  );
};

export default HowItWorks;
