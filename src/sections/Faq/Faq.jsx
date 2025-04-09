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
                            url="#get-started"
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
                                title="How does Escrowly ensure the security of my transactions?"
                                text="Escrowly supports major cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), and USDT. Our platform ensures secure and seamless crypto transactions for all users"
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
                                title="What payment methods do you support?"
                                text="Escrowly supports major cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), and USDT. Our platform ensures secure and seamless crypto transactions for all users"
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
                                title="Can I integrate Escrowly with my existing business systems?"
                                text="Escrowly supports major cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), and USDT. Our platform ensures secure and seamless crypto transactions for all users"
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
                                title="How quickly are funds released after a transaction is completed?"
                                text="Escrowly supports major cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), and USDT. Our platform ensures secure and seamless crypto transactions for all users"
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
                                title="Is Escrowly available for international transactions?"
                                text="Escrowly supports major cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), and USDT. Our platform ensures secure and seamless crypto transactions for all users"
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
