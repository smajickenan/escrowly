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
                    title="About Escrowly"
                    className=""
                />
                <p>We are creating a safer digital economy by enabling secure and transparent transactions for everyone, ensuring that both buyers and sellers can confidently engage in their deals without fear of fraud or dishonesty</p>
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
                                <p>We believe in empowering businesses with the right technology and tools to succeed in the digital world, fostering growth and innovation across industries.</p>   
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
                    <p className="mt-20">Escrowly is a trusted platform for secure crypto transactions, offering modern payment solutions and seamless escrow services. We ensure safe and reliable deals for all users</p>
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
