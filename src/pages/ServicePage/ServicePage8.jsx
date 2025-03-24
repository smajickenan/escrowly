import React from "react";
import { Helmet } from "react-helmet-async";
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

const ServicePage8 = () => (
    <>
        <Helmet>
            <title>Best Crypto Escrow - Escrowly</title>
            <meta name="description" content="Secure your crypto transactions with Escrowly, the trusted escrow service for crypto traders." />
            <meta name="keywords" content="secure crypto escrow, secure transactions, Escrowly, Bitcoin escrow, Ethereum escrow, crypto escrow service, smart contract escrow, blockchain escrow service, crypto escrow for businesses, USDT escrow service, escrow wallet for crypto, secure P2P crypto escrow, escrow for digital items, escrow for domain names, escrow for real estate" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Escrowly – Buy & Sell Online Safely with Crypto" />
            <meta property="og:description" content="Buy and sell online with confidence using Escrowly. Our secure crypto escrow service ensures safe transactions for digital goods, services, and high-value assets." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "Escrowly Services", url: "/escrowly-services" },
                        { title: "Real Estate Escrow  ", url: "/secure-domain" },
                    ]}
                />  
                <section className="section-service-page">
                    <div className="container">
                        <SectionHeader 
                            label="Real Estate Escrow "
                            title="Secure Real Estate Transactions with Escrowly"
                            className="centered"
                        />
                        <p className="service-page-description">When dealing with real estate transactions, security and transparency are crucial. Escrowly provides a reliable escrow service to protect both buyers and sellers, ensuring that funds and property transfers happen smoothly and securely.</p>
                        <img className="service-page-image" src="/images/service-page-8.jpg" alt="" />
                        <div className="service-page-content row">
                            <div className="col col-left">
                                <h3>How Escrowly Simplifies Real Estate Transactions</h3>
                                <ol>
                                    <li><strong>Establish Terms</strong> – Buyer and seller agree on transaction details, including contract terms and conditions.</li>
                                    <li><strong>Secure Payment with Escrowly</strong> – The buyer deposits funds into Escrowly’s secure escrow account.</li>
                                    <li><strong>Legal Processing & Inspections</strong> – Documentation is verified, and property inspections are completed.</li>
                                    <li><strong>Final Approval & Closing</strong> – Once all terms are met, the buyer confirms the transaction.</li>
                                    <li><strong>Funds Released by Escrowly</strong> – The payment is securely transferred to the seller, completing the transaction.</li>
                                </ol>
                                <h3>Why Choose Escrowly for Real Estate?</h3>
                                <ul>
                                    <li>Fraud Protection – Payments are held securely and only released when all contractual conditions are satisfied.</li>
                                    <li>Secure Fund Holding – Escrowly acts as a trusted intermediary, keeping funds safe throughout the transaction process.</li>
                                    <li>Transparency & Trust – Buyers and sellers can confidently complete transactions without fear of disputes or scams.</li>
                                    <li>Legal & Contract Compliance – Escrowly ensures all documentation is properly processed, reducing the risk of legal complications.</li>
                                    <li>Crypto-Friendly Transactions – In addition to traditional payment methods, Escrowly supports cryptocurrency payments for modern and secure transactions.</li>
                                </ul>
                                <h3>Make Your Real Estate Transactions Hassle-Free with Escrowly</h3>
                                <p>Whether you’re purchasing a home, selling commercial property, or investing in real estate, Escrowly provides a seamless and secure process. With Escrowly, you can eliminate uncertainty and conduct your transaction with confidence. Get started today and experience a smarter way to buy and sell real estate!</p>
                                
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
    </>
);

export default ServicePage8;