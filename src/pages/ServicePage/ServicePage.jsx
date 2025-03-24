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

const ServicePage = () => (
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
                        { title: "Secure Domain", url: "/secure-domain" },
                    ]}
                />  
                <section className="section-service-page">
                    <div className="container">
                        <SectionHeader 
                            label="Domain Name Escrow"
                            title="Secure Domain Name Holding with Escrowly"
                            className="centered"
                        />
                        <p className="service-page-description">Escrowly is domain holding service provides a secure way for buyers and sellers to transact domain names using cryptocurrency. The buyer locks funds on our platform, while the seller transfers the domain. Only when both parties fulfill the agreed conditions, the buyer receives the domain, and the seller gets paid—eliminating risks and ensuring a seamless transaction.</p>
                        <img className="service-page-image" src="/images/service-page-1.jpg" alt="" />
                        <div className="service-page-content row">
                            <div className="col col-left">
                                <h3>Standard Fees</h3>
                                <p>The service includes a Domain Holding Fee along with a standard escrow fee. The holding fee is based on the domain’s value and the holding period.</p>
                                <h6>Lease with Purchase</h6>
                                <ul>
                                    <li>0.01% of the domain’s value (minimum $100) × holding period (in months).</li>
                                </ul>
                                <h6>Lease Only</h6>
                                <ul>
                                    <li>0.02% of the domain’s value (minimum $200) × holding period (in months).</li>
                                </ul>
                                <h3>Payment Schedule Change Fee</h3>
                                <p>Once the initial payment schedule is set, any requested modifications will incur a $250 fee.</p>
                                <h3>DNS Administrative Fee</h3>
                                <p>Each request for DNS-related administrative changes will be charged an $85 fee.</p>
                                <p className="note">Note: Domain holding transactions require a minimum holding period of three months and a maximum of five years.</p>
                                <h3>How Domain Name Holding works</h3>
                                <ul>
                                    <li>The buyer or seller initiates the domain holding transaction. Escrowly notifies both parties and, if a broker is involved, allows them to assist in setting the terms.</li>
                                    <li>The buyer and seller review and sign the Domain Holding Agreement.</li>
                                    <li>Escrowly verifies the seller’s domain ownership.</li>
                                    <li>The seller transfers the domain to Escrowly’s secure account.</li>
                                    <li>The buyer makes scheduled payments as per the agreement.</li>
                                    <li>Once all payments are complete, the domain is released to the buyer.</li>
                                </ul>
                                <p>Escrowly provides a trusted way to conduct domain transactions in the crypto space. Whether leasing or purchasing, our platform ensures fair, secure, and transparent deals—reducing risks in high-value domain transactions.</p>
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

export default ServicePage;