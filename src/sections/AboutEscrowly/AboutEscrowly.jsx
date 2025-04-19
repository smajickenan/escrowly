import React from 'react';
import { motion } from "motion/react";
import "./AboutEscrowly.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Button from "../../components/Button/Button";

const AboutEscrowly = () => { 

  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section section-about-escrowly"
    >
        <div className="container">
            <div className="row sm-direction-column">
                <div className="col">
                <SectionHeader 
                    label="About Us"
                    title="The World’s First Fully Crypto-Native Escrow Platform"
                    className=""
                />
                <p>At Escrowly.com, users can enjoy risk-free crypto transactions because our platform ensures secure transactions all the time. Our platform serves customers beyond the role of traditional payment processing services and digital wallets. Escrowly serves as the initial fully cryptocurrency-based escrow ecosystem designed to shield P2P and B2B deals in decentralized economies.</p>
                </div>
                <div className="col"></div>
            </div>
            
            <div className="row sm-direction-column">
                <div className="col">
                    <img className="content-image" src="/images/about-escrowly-image.jpg" alt="" />
                </div>
                <div className="col">
                    <div className="row xs-direction-column-reverse">
                        <div className="col">
                            <div className="about-card">
                                <h5>Our Purpose</h5>
                                <p>Our organization aims to establish a secure, intelligent crypto economy that enables every person to perform transactions safely. Our team strives to build technologies that help create an electronic payment system which functions instantaneously, provides absolute security, and is generally accepted worldwide.</p>   
                                <Button 
                                    url="#get-started"
                                    text="Get Started"
                                    icon="/img/btn-arrow-right.svg"
                                    delay={0}
                                />    
                            </div>
                        </div>
                        <div className="col">
                            <div className="about-card">
                                <img src="/images/about-card-1.jpg" alt="" className="about-card-image" />
                                <div className="about-users">
                                    <img src="/images/user-1.jpg" alt="" />
                                    <img src="/images/user-2.jpg" alt="" />
                                    <img src="/images/user-3.jpg" alt="" />
                                </div>
                                <span>We envision a future where businesses thrive through secure crypto transactions</span>
                            </div>
                        </div>
                    </div>
                    <p className="mt-20">Escrowly exists as more than a crypto payment escrow solution - it represents a modern approach to cryptographic trust for digital transactions.</p>
                </div>
            </div>
            <div className="about-counters">
                <div className="row xs-direction-column">
                    <div className="col">
                        <div className="about-counter">
                            <div className="num">99%</div>
                            <p>Secure transactions with every use, ensuring peace of mind for all parties</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="about-counter">
                            <div className="num">1M+</div>
                            <p>Trusted users who rely on our platform for safe
                            and secure crypto deals</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="about-counter">
                            <div className="num">5K+</div>
                            <p>Successful transactions processed, helping businesses grow and thrive</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.section> 
  );
};

export default AboutEscrowly;
