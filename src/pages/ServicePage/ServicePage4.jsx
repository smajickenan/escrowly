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

const ServicePage4 = () => (
    <div>
        <main className="main-content">
            <Breadcrumbs 
                breadcrumbs={[
                    { title: "Home", url: "/" },
                    { title: "Escrowly Services", url: "/escrowly-services" },
                    { title: "Milestone Transactions ", url: "/secure-domain" },
                ]}
            />  
            <section className="section-service-page">
                <div className="container">
                    <SectionHeader 
                        label="Milestone Transactions "
                        title="Secure Milestone Transactions with Escrowly"
                        className="centered"
                    />
                    <p className="service-page-description">Escrowly is domain holding service provides a secure way for buyers and sellers to transact domain names using cryptocurrency. The buyer locks funds on our platform, while the seller transfers the domain. Only when both parties fulfill the agreed conditions, the buyer receives the domain, and the seller gets paid—eliminating risks and ensuring a seamless transaction.</p>
                    <img className="service-page-image" src="/images/service-page-4.jpg" alt="" />
                    <div className="service-page-content row">
                        <div className="col col-left">
                            <h3>What is Escrow?</h3>
                            <p>Escrow is a financial arrangement where a trusted third party holds and regulates payments between two parties. This system enhances security for online payments and transactions, reducing the risk of fraud and scams when buying and selling goods or services.</p>
                            <p>Traditionally, escrow services were used in high-value transactions like real estate, requiring a bank or lawyer. Now, with Escrowly, anyone can use this secure and affordable service for milestone payments, service transactions, and more.</p>
                            <h3>What Are Milestone Transactions?</h3>
                            <p>Milestone transactions break a payment into multiple phases, ensuring that funds are only released once predefined conditions are met. This method is ideal for goods, services, or a combination of both.</p>
                            <p>For example, if you hire a freelancer to develop a website, you can set up milestones such as:</p>
                            <ul>
                                <li>50% payment upon draft completion</li>
                                <li>50% payment upon final delivery</li>
                            </ul>

                            <p>Buyers fund the transaction in full at the beginning, ensuring sellers receive payments as they successfully complete each milestone.</p>
                            <h3>How Milestone Transactions Work</h3>
                            <ol>
                                <li><strong>Buyer and Seller Agree on Terms</strong> – Both parties define milestones and payment conditions.</li>
                                <li><strong>Buyer Funds the Transaction</strong> – The agreed amount is securely held in escrow.</li>
                                <li><strong>Seller Completes Each Milestone</strong> – Payments are released incrementally as milestones are met.</li>
                                <li><strong>Final Payment and Completion</strong> – Upon final approval, the remaining funds are transferred.</li>
                            </ol>
                            <p>Both the Buyer and Seller must also agree on how the escrow fees will be covered—either by the Buyer, Seller, or shared equally.</p>
                            <h3>How Domain Name Holding works</h3>
                            <ul>
                                <li>Secure Payments – Funds are only released when predefined conditions are met.</li>
                                <li>Transparency for Sellers – Confidence that payment is secured in escrow.</li>
                                <li>Protection for Buyers – Assurance that their money is safe until milestones are fulfilled.</li>
                                <li>Lower Risk of Fraud – Transactions are monitored and regulated.</li>
                                <li>Flexibility – Can be used for a variety of goods and services.</li>
                                <li>Fully Licensed & Trusted – Escrowly ensures compliance and security in every transaction.</li>
                            </ul>
                            <p>With Escrowly, both Buyers and Sellers can conduct transactions with peace of mind, reduced fraud risk, and clear terms.</p>
                            
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

export default ServicePage4;