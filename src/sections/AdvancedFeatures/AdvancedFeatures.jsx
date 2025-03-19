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
                        text="Your transactions, fully protected with our advanced security system"
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
                        title="Fast and Easy Transactions"
                        text="Streamline your payments with a seamless and efficient process"
                        image="/images/advanced-feature-2.svg"
                        btnUrl="#url"
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
                        text="Fair and transparent resolution, ensuring peace of mind"
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
                        text="Easily integrate secure crypto escrow services into your business, enabling safe and automated transactions without risks"
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
