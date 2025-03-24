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

const ServicePage5 = () => (
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
                        { title: "Online Goods & Digital Items  ", url: "/secure-domain" },
                    ]}
                />  
                <section className="section-service-page">
                    <div className="container">
                        <SectionHeader 
                            label="Online Goods & Digital Items "
                            title="Secure Online Goods & Digital Transactions with Escrowly"
                            className="centered"
                        />
                        <p className="service-page-description">Escrowly provides a safe and seamless way to buy and sell online goods and digital items without the risk of fraud. Our escrow service ensures that payments are securely held until both parties fulfill their obligations, making transactions more trustworthy and reliable.</p>
                        <img className="service-page-image" src="/images/service-page-5.jpg" alt="" />
                        <div className="service-page-content row">
                            <div className="col col-left">
                                <h3>What is Escrow for Online Goods & Digital Items?</h3>
                                <p>Buying and selling online goods or digital items comes with risks, including fraud, chargebacks, and non-delivery. Escrowly eliminates these risks by acting as a secure third-party, holding funds until the transaction terms are met.</p>
                                <p>Whether you're purchasing high-value digital assets like domain names, software licenses, NFTs, or physical online goods, Escrowly ensures both buyers and sellers are protected.</p>
                                <h3>How It Works</h3>
                                <ol>
                                    <li><strong>Buyer and Seller Agree on Terms</strong> – Both parties define transaction details, including delivery terms.</li>
                                    <li><strong>Buyer Sends Payment to Escrowly</strong> – Funds are securely held in escrow.</li>
                                    <li><strong>Seller Delivers the Item</strong> – The seller provides the goods or digital asset as per the agreement.</li>
                                    <li><strong>Buyer Confirms Receipt</strong> – The buyer verifies that the item meets expectations.</li>
                                    <li><strong>Escrowly Releases Payment to Seller</strong> – Once the buyer confirms, the seller receives the funds.</li>
                                </ol>
                                <h3>Why Use Escrowly for Online & Digital Transactions?</h3>
                                <ul>
                                    <li>Fraud Prevention – No payment is released until goods are received and verified.</li>
                                    <li>Chargeback Protection – Eliminates the risk of payment reversals common in digital sales.</li>
                                    <li>Buyer Security – Ensures that the digital item or online goods meet the agreed terms.</li>
                                    <li>Seller Confidence – Guarantees payment once delivery is confirmed.</li>
                                    <li>Versatile Transactions – Supports physical online goods and various digital assets like software, domains, and NFTs.</li>
                                    <li>Crypto Payments Accepted – Conduct transactions securely with cryptocurrency.</li>
                                </ul>
                                <p>With Escrowly, you can trade online goods and digital assets with complete confidence. Whether you're a freelancer, a digital entrepreneur, or an online business, our secure escrow service ensures every transaction is fair and transparent. Start your secure transaction now and experience the safest way to buy and sell online!</p>
                                
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

export default ServicePage5;