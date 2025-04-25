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

const ServicePage2 = () => (
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
                        { title: "Escrowly Services", url: "/services" },
                        { title: "Crypto Escrow Services", url: "/secure-domain" },
                    ]}
                />  
                <section className="section-service-page">
                    <div className="container">
                        <SectionHeader 
                            label="Crypto Escrow Services "
                            title="What Is a Crypto Escrow Service and How Does It Work?"
                            className="centered"
                        />
                        <p className="service-page-description">In recent times, the adoption of cryptocurrencies has grown at an incredible rate, revolutionizing how transactions are conducted. However, the decentralized nature of crypto-based transactions has the tendency to accommodate scams and other fraudulent activities. This is where a crypto escrow service comes into the equation. This unbiased third party acts as a reliable middleman, ensuring that the pre-determined terms and conditions between the buyers and sellers are met.</p>
                        <img className="service-page-image" src="/images/service-page-2.jpg" alt="Crypto Escrow Services by Escrowly.com" />
                        <div className="service-page-content row">
                            <div className="col col-left">
                                <h3>What is a Crypto Escrow Service?</h3>
                                <p>A <strong>crypto escrow service</strong> is a secure mechanism built to safeguard all parties in crypto transactions. It involves a reliable third party or a smart contract that keeps the digital assets in escrow until the terms of the agreement are met. The main purpose of a crypto escrow service is to reduce the risks associated with fraudulent activities or non-fulfillment of contractual obligations.</p>
                                <ol>
                                    <li><strong>Buyer Protection</strong>: With our escrow service, you can rest assured that funds will only be released once all conditions of the transaction are met. If the item doesn't match the description, you can return it and receive a full refund.</li>
                                    <li><strong>Seller Confidence</strong>: Sellers can trust that funds will only be disbursed after the buyer confirms the item was received in the agreed-upon condition.</li>
                                    <li><strong>Neutral Third Party</strong>: Escrowly acts as a neutral party, ensuring transparency and security for both sides of the transaction.</li>
                                </ol>

                                <h3>How to Protect Yourself from Fraud in Crypto Transactions</h3>
                                <p>There are several steps you can take to minimize the risks when engaging in online crypto transactions:</p>
                                <ul>
                                    <li>Use Trusted Platforms: Many online marketplaces offer a rating system for sellers, helping you identify reputable sellers and avoid potential scammers.</li>
                                    <li>Use Secure Payment Methods: While cryptocurrencies offer anonymity, it's essential to use trusted services that protect your transaction. Escrowly ensures that your funds are safe until all conditions of the deal are met.</li>
                                    <li>Inspection Terms: Our escrow service allows you to set inspection terms to verify that the item matches its description. If it doesn't pass inspection, you can return it and get your funds back.</li>
                                </ul>
                                <h3>Why Use Escrowly for Crypto Transactions</h3>
                                <ul>
                                    <li>Security & Confidence: Our escrow service guarantees that funds will only be transferred when all deal conditions are satisfied.</li>
                                    <li>Additional Services: We offer extra services like ownership verification and lien checks, ensuring that your transaction is as secure as possible.</li>
                                </ul>
                                <h3>Escrowly Process in 5 Simple Steps</h3>
                                <ol>
                                    <li><strong>Agree on Terms</strong>: The buyer and seller agree on the price, shipping terms, and inspection conditions. All details of the transaction are confirmed in advance.</li>
                                    <li><strong>Payment</strong>: The buyer sends cryptocurrency to a secure escrow account. Once the payment is verified, the seller is notified that funds have been secured in escrow.</li>
                                    <li><strong>Shipping</strong>: After payment verification, the seller ships the item to the buyer and provides tracking information.</li>
                                    <li><strong>Inspection</strong>: The buyer receives the item and inspects it within the agreed inspection period. If everything meets the expectations, the buyer confirms acceptance.</li>
                                    <li><strong>Release of Funds</strong>: Once the buyer confirms the item is as described, funds are released to the seller.</li>
                                </ol>
                                <h3>Benefits for Buyers and Sellers</h3>
                                <ul>
                                    <li>Confidence for Buyers: You can be sure that you’ll receive what was agreed upon. If the item doesn’t match the description, you can return it and receive a refund.</li>
                                    <li>Security for Sellers: Fraudulent payments are eliminated since funds are held in escrow and only released once the buyer confirms the item’s condition.</li>
                                    <li>Low Fees: Our fees are minimal and can be split between the buyer and seller, making the service affordable and beneficial for both parties.</li>
                                </ul>
                                <p>Escrowly offers a reliable and secure way to handle crypto transactions. We protect both buyers and sellers, ensuring that the terms of the deal are fulfilled every time.</p>
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

export default ServicePage2;