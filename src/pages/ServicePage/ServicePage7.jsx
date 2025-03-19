import React from "react";
import "./ServicePage.scss";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import { Navigation, Scrollbar, Grid } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css/grid';
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import Button from "../../components/Button/Button";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Innovate from "../../sections/Innovate/Innovate";

const ServicePage7 = () => (
    <div>
        <main className="main-content">
            <Breadcrumbs 
                breadcrumbs={[
                    { title: "Home", url: "/" },
                    { title: "Escrowly Services", url: "/escrowly-services" },
                    { title: "Luxury Items Escrow  ", url: "/secure-domain" },
                ]}
            />  
            <section className="section-service-page">
                <div className="container">
                    <SectionHeader 
                        label="Luxury Items Escrow "
                        title="Secure Escrow for Luxury Item Transactions"
                        className="centered"
                    />
                    <p className="service-page-description">Buying and selling luxury items online comes with risks, including counterfeit goods, fraud, and payment disputes. Escrowly eliminates these concerns by providing a trusted escrow service, ensuring that both buyers and sellers are protected throughout the transaction process.</p>
                    <img className="service-page-image" src="/images/service-page-7.jpg" alt="" />
                    <div className="service-page-content row">
                        <div className="col col-left">
                            <h3>Why Use Escrow for Luxury Goods?</h3>
                            <p>Luxury transactions involve high-value items such as fine jewelry, designer handbags, rare collectibles, and luxury watches. With Escrowly, both parties can proceed with confidence, knowing that funds and items are securely held until all conditions are met.</p>
                            <p>Escrowly acts as a neutral third party, safeguarding transactions and guaranteeing that payments are only released once authenticity and condition are verified.</p>
                            <h3>How Escrowly Works for Luxury Transactions</h3>
                            <ol>
                                <li>Agree on Transaction Terms – Buyer and seller set the terms, including inspection periods and shipping conditions.</li>
                                <li>Buyer Deposits Funds in Escrow – The payment is securely held by Escrowly.</li>
                                <li>Seller Ships the Luxury Item – The seller provides tracking details for a secure delivery process.</li>
                                <li>Buyer Inspects and Confirms Authenticity – The buyer verifies that the item matches the description and is genuine.</li>
                                <li>Escrowly Releases Payment to Seller – Once approved, funds are transferred to the seller.</li>
                            </ol>
                            <h3>Benefits of Using Escrowly for Luxury Sales</h3>
                            <ul>
                                <li>Authenticity Verification – Buyers can confirm item authenticity before releasing funds.</li>
                                <li>Fraud Protection – Payments are only processed when both parties fulfill their obligations.</li>
                                <li>Secure Transactions – Funds are safeguarded until all conditions are met.</li>
                                <li>Peace of Mind for Sellers – Payment is guaranteed upon successful delivery and verification.</li>
                                <li>Crypto Payments Supported – Conduct secure transactions using cryptocurrency for added convenience.</li>
                            </ul>
                            <p>Whether you’re purchasing a rare timepiece or selling a valuable collectible, Escrowly ensures a smooth, secure, and transparent transaction. Start your luxury escrow transaction today and experience worry-free buying and selling!</p>
                            
                            <Button 
                                url="#get-started"
                                text="Get Started Now"
                                icon="/img/btn-arrow-right.svg"
                                delay={0}
                                className="btn btn-primary"
                            />  
                        </div>
                        <div className="col col-right">
                            <h4>Other Services</h4>
                            <Button 
                                url="#get-started"
                                text="All Services"
                                icon="/img/btn-arrow-right-dark.svg"
                                delay={0}
                                className="btn btn-link-dark"
                            />  
                            
                            <div className="service-page-carousel-wrapper">
                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1, transition: { duration: 0.6, delay: 0.8 } }
                                    }}
                                >
                                    <Swiper
                                        // onSwiper={handleSwiper}
                                        speed={1000}
                                        loop={true} 
                                        // slidesPerView="auto"
                                        modules={[Navigation, Scrollbar, Grid]}
                                        scrollbar={{
                                            hide: false,
                                            dragSize: 250
                                        }}
                                        breakpoints={{
                                            320: { 
                                                spaceBetween: 12,
                                                slidesPerView: "auto",  
                                                grid: {
                                                    rows: 1,  
                                                    fill: "row"
                                                },
                                                scrollbar:{
                                                    hide: false,
                                                    dragSize: 101
                                                }
                                            }, 
                                            768: { 
                                                spaceBetween: 0,
                                                slidesPerView: 1, 
                                                loop: true,
                                                loopAddBlankSlides: true,
                                                loopAdditionalSlides: 4,
                                                grid: {
                                                    rows: 3, 
                                                },
                                                scrollbar:{
                                                    hide: true,
                                                    dragSize: 250
                                                }
                                            }
                                        }}
                                    >
                                        <SwiperSlide style={{ width: 'auto' }}>
                                            <ServiceCard
                                                icon="/img/icon-hiw-3.svg"
                                                title="General Escrow Services "
                                                text="Secure transactions for goods, services, and contracts with full protection"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: 'auto' }}>
                                            <ServiceCard
                                                icon="/img/icon-hiw-3.svg"
                                                title="Domain Name Escrow"
                                                text="Ensure a safe and smooth transfer of domain ownership with escrow protection"
                                            />
                                        </SwiperSlide>
                                        <SwiperSlide style={{ width: 'auto' }}>
                                            <ServiceCard
                                                icon="/img/icon-hiw-3.svg"
                                                title="Motor Vehicle Escrow "
                                                text="Buy or sell vehicles confidently with funds securely held until transfer"
                                            />
                                        </SwiperSlide>
                                    </Swiper>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Innovate/>
        </main>
    </div>
);

export default ServicePage7;
