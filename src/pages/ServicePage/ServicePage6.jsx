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

const ServicePage6 = () => (
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
                        { title: "Stock & Investment Escrow   ", url: "/secure-domain" },
                    ]}
                />  
                <section className="section-service-page">
                    <div className="container">
                        <SectionHeader 
                            label="Stock & Investment Escrow  "
                            title="Secure Stock & Investment Transactions with Escrowly"
                            className="centered"
                        />
                        <p className="service-page-description">Escrowly provides a trusted and transparent escrow service for stock and investment transactions. Whether you are buying shares, investing in a startup, or engaging in private equity deals, our escrow system ensures that funds and assets are securely held until all agreed-upon conditions are met.</p>
                        <img className="service-page-image" src="/images/service-page-6.jpg" alt="" />
                        <div className="service-page-content row">
                            <div className="col col-left">
                                <h3>What is Stock & Investment Escrow?</h3>
                                <p>Investing in stocks, private equity, or other financial instruments involves significant risk, including fraud and default. Escrowly acts as a neutral third party to safeguard both buyers and sellers, ensuring compliance with the transaction terms before releasing funds or shares.</p>
                                <p>With Escrowly, investors and businesses can engage in secure transactions without the worry of disputes, unauthorized transfers, or unfulfilled agreements.</p>
                                <h3>How It Works</h3>
                                <ol>
                                    <li>Buyer and Seller Agree on Terms – Both parties define transaction details, including investment terms, share transfers, and payment conditions.</li>
                                    <li>Buyer Deposits Funds with Escrowly – The buyer securely deposits the investment amount into escrow.</li>
                                    <li>Seller Transfers Shares or Assets – The seller provides the agreed-upon shares, securities, or investment agreements.</li>
                                    <li>Buyer Reviews and Confirms – The buyer verifies the assets or shares meet the agreed-upon terms.</li>
                                    <li>Escrowly Releases Funds to Seller – Once the buyer confirms, the seller receives the payment securely.</li>
                                </ol>
                                <h3>Why Use Escrowly for Stock & Investment Transactions?</h3>
                                <ul>
                                    <li>Fraud Protection – Ensures that funds are only released when investment terms are met.</li>
                                    <li>Regulated & Secure – Provides a legally compliant and transparent process for stock purchases and investments.</li>
                                    <li>Investor Confidence – Buyers can verify assets before releasing payments.</li>
                                    <li>Seller Security – Guarantees that sellers receive funds upon successful transaction completion.</li>
                                    <li>Versatile Transactions – Suitable for stock purchases, startup investments, venture capital deals, and more.</li>
                                    <li>Crypto Payments Accepted – Conduct secure investment transactions using cryptocurrency.</li>
                                </ul>
                                <p>Whether you are an investor, business owner, or financial professional, Escrowly provides the safest way to conduct stock and investment transactions. Secure your assets and investments with confidence—get started today!</p>
                                
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

export default ServicePage6;