import React from "react";
import { motion } from "motion/react";
import "./Faq.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import AccordionItem from "../../components/AccordionItem/AccordionItem";
import Button from "../../components/Button/Button";

const Faq = () => {

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="section section-faq"
        >
            <div className="container">
                <div className="row xs-direction-column">
                    <div className="col">
                        <SectionHeader
                            label="FAQ'S"
                            title="Frequently Asked Questions"
                        />
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } }
                            }}
                        >
                            We offer SEO, social media marketing, and seamless integration with your existing systems. Escrowly ensures your business's security with encrypted data protection
                        </motion.p>
                        <Button
                            text="Get Started"
                            url="/get-started"
                            icon="/img/btn-arrow-right.svg"
                            delay={1.6}
                        />
                    </div>
                    <div className="col">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 70 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } }
                            }}
                        >
                            <AccordionItem
                                title="How does Escrowly guarantee the safety of my crypto when buying or selling?"
                                text="Escrowly employs smart contract escrow and blockchain escrow services technology to safeguard funds until all terms of an agreement are met."
                                active={false}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.9 } }
                            }}
                        >
                            <AccordionItem
                                title="What payment methods does Escrowly support?"
                                text="We accept payments in popular cryptocurrencies, such as Bitcoin, Ethereum, and USDT. Escrowly also has options for escrow wallets for crypto."
                                active={false}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.1 } }
                            }}
                        >
                            <AccordionItem
                                title="Can I incorporate Escrowly with my existing business structure?"
                                text="Absolutely yes! Our Escrowly Plug and Play Simple Connect API makes it easy to integrate crypto escrow into e-commerce stores and other business platforms, helping businesses become crypto compliant."
                                active={false}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.2 } }
                            }}
                        >
                            <AccordionItem
                                title="How quickly are funds released after a deal is done?"
                                text="Instantaneously. Once the terms of the transaction are met, funds are released via our secure P2P crypto escrow system backed by automated escrow smart contracts."
                                active={false}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 1.4 } }
                            }}
                        >
                            <AccordionItem
                                title="Does Escrowly support international transactions?"
                                text="Yes. We promote cross-border crypto escrow and escrow for international business deals with complete international access and compliance."
                                active={false}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Faq;
