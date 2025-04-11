import React from 'react';
import { motion } from "motion/react";
import "./AdvancedFeatures.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import AdvancedFeatureCard from '../../components/AdvancedFeatureCard/AdvancedFeatureCard';

const AdvancedFeatures = () => {

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section section-advanced-features"
        >
            <div className="container">
                <SectionHeader
                    label="Advanced Features"
                    title="Key Functionalities"
                    className=""
                />
                <div className="row sm-direction-column">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -70 },
                            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } }
                        }}
                        className="col"
                    >
                        <AdvancedFeatureCard
                            title="Escrowly Pay"
                            text="A safe crypto escrow service for USDT, Bitcoin, Ethereum, and other digital assets, developed to protect both buyers and sellers."
                            image="/images/advanced-feature-1.svg"
                            imageDelay={0.7}
                        />
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 70 },
                            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.7 } }
                        }}
                        className="col"
                    >
                        <AdvancedFeatureCard
                            title="Fast and Seamless Transfers"
                            text="Benefit Escrowly.com instant and secure transactions with our crypto escrow platform, suitable for secure crypto escrow, and cross-border crypto transactions."
                            image="/images/advanced-feature-2-4x.png"
                            btnUrl="/fee-calculator"
                            btnText="Fee Calculator"
                            className="image-bottom"
                            imageDelay={0.9}
                        />
                    </motion.div>
                </div>
                <div className="row sm-direction-column">
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -70 },
                            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.2 } }
                        }}
                        className="col col-8"
                    >
                        <AdvancedFeatureCard
                            title="Simple Dispute Resolution"
                            text="Transparent and fair resolution for complete peace of mind"
                            background="/images/advanced-feature-3.jpg"
                            className="feature-bg mb-0"
                        />
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 70 },
                            visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.9 } }
                        }}
                        className="col"
                    >
                        <AdvancedFeatureCard
                            title="Escrowly API"
                            text="Incorporate secure crypto escrow payments into your business with our reliable Escrowly API, designed for both individual businesses and for online e-commerce shops."
                            image="/images/advanced-feature-4.svg"
                            btnUrl="#url"
                            btnText="Api Documentation"
                            className="feature-vertical mb-0"
                            imageDelay={1.1}
                        />
                    </motion.div>
                </div>

            </div>
        </motion.section>
    );
};

export default AdvancedFeatures;
