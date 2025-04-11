import React from "react";
import { motion } from "motion/react";
import "./AboutUs.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Button from "../../components/Button/Button";
import FeatureCard from "../../components/FeatureCard/FeatureCard";

const AboutUs = () => {

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section section-about-us"
        >
            <div className="container">
                <div className="row sm-direction-column sm-mb-30">
                    <div className="col">
                        <SectionHeader
                            label="About us"
                            title="Ensuring Secure and Transparent <br> Transactions with Modern Payment Solutions <br> for Businesses and Individuals"
                            className="mb-40 xs-mb-20 hide-breaks-xs small-title"
                        />
                    </div>
                    <div className="col">
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 70 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }
                            }}
                            className="mt-32 xs-mt-0 mb-20 sm-font-16"
                        >
                            Escrowly is a crypto escrow company that serves as a neutral third party, protecting high-value assets until agreement is fulfilled. Our blockchain escrow ensures trustworthy crypto escrow transactions, and business deals powered by smart contracts.
                        </motion.p>
                        <Button
                            url="/get-started"
                            text="Get Started"
                            icon="/img/btn-arrow-right.svg"
                            delay={0.8}
                        />
                    </div>
                </div>
                <div className="row sm-direction-column">
                    <div className="col">
                        <motion.img
                            variants={{
                                hidden: { opacity: 0, x: -70 },
                                visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }
                            }}
                            className="content-image xs-hidden"
                            src="/images/about-us-image-1.jpg" alt=""
                        />
                        <motion.img
                            variants={{
                                hidden: { opacity: 0, x: -70 },
                                visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }
                            }}
                            className="content-image xs-visible"
                            src="/images/about-us-image-1-mob.jpg" alt=""
                        />
                        <div className="row sm-direction-column">
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.2 } }
                                }}
                                className="col"
                            >
                                <FeatureCard
                                    imgSrc="/img/feature-card-icon-1.svg"
                                    title="Our Motivation"
                                    text="We help businesses succeed by providing the right tools and technology for growth"
                                />
                            </motion.div>
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.4 } }
                                }}
                                className="col"
                            >
                                <FeatureCard
                                    imgSrc="/img/feature-card-icon-2.svg"
                                    title="Our Purpose"
                                    text="We envision a future where businesses have the tools to thrive online"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="col">
                        <motion.img
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 1.2 } }
                            }}
                            className="content-image sm-hidden"
                            src="/images/about-us-image-2.jpg" alt=""
                        />
                    </div>
                </div>

            </div>
        </motion.section>
    );
};

export default AboutUs;
