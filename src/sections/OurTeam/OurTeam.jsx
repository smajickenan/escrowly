import React, { useRef } from 'react';
import { motion } from "motion/react";
import "./OurTeam.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Navigation, Scrollbar, Grid } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard';

const OurTeam = () => { 
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
        className="section section-our-team"
    >
        <div className="container">
            <SectionHeader 
                label="Our team"
                title="Our Expert Team"
                className="mb-20"
            />

            <div className="our-team-carousel-wrapper">
                <div className="carousel-nav">
                    <div ref={prevRef} className="swiper-button-prev"></div>
                    <div ref={nextRef} className="swiper-button-next"></div>
                </div>
                <motion.div
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.6, delay: 0.8 } }
                    }}
                >
                    <Swiper
                        onSwiper={handleSwiper}
                        speed={1000}
                        loop={true} 
                        // slidesPerView="auto"
                        modules={[Navigation, Scrollbar, Grid]}
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
                                slidesPerView: 2,  
                                grid: {
                                    rows: 2,  
                                    fill: "row"
                                },
                                scrollbar:{
                                    hide: true,
                                    dragSize: 101
                                }
                            }, 
                            768: { 
                                spaceBetween: 20,
                                slidesPerView: 3, 
                                loop: true,
                                loopAddBlankSlides: true,
                                loopAdditionalSlides: 4,
                                grid: {
                                    rows: 1, 
                                },
                                scrollbar:{
                                    hide: false,
                                    dragSize: 250
                                }
                            }, 
                            1024: { 
                                slidesPerView: 4, 
                            }
                        }}
                    >
                            <SwiperSlide style={{ width: 'auto' }}>
                                    <TeamMemberCard 
                                        img="/images/team-member-1.jpg"
                                        name="John Smith"
                                        position="Founder & CEO"
                                    />
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 'auto' }}>
                                    <TeamMemberCard 
                                        img="/images/team-member-2.jpg"
                                        name="Emily Johnson"
                                        position="Head of Security & Compliance"
                                    />
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 'auto' }}>
                                    <TeamMemberCard 
                                        img="/images/team-member-3.jpg"
                                        name="Michael Davis"
                                        position="Lead Blockchain Developer"
                                    />
                            </SwiperSlide>
                            <SwiperSlide style={{ width: 'auto' }}>
                                    <TeamMemberCard 
                                        img="/images/team-member-4.jpg"
                                        name="Sarah Wilson"
                                        position="Product Manager"
                                    />
                            </SwiperSlide>
                    </Swiper>
                </motion.div>
            </div>
        </div>
    </motion.section> 
  );
};

export default OurTeam;
