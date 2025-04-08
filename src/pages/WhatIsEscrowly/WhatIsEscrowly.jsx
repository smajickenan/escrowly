import React, { useState } from "react";
import { Link } from "react-router-dom";
import './WhatIsEscrowly.scss';
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FeeCalculator from "../../components/FeeCalculator/FeeCalculator";
import Faq from "../../sections/Faq/Faq";
import Innovate from "../../sections/Innovate/Innovate";

const WhatIsEscrowly = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    return (
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
                            { title: "What is Escrowly", url: "/what-is-escrowly" },
                            { title: "What is Escrow?", url: "/what-is-escrowly" },
                        ]}
                    />

                    <section className="section-what-is-escrow">
                        <div className="container">
                            <div className="row">
                                <div className="col col-left">
                                    <SectionHeader
                                        label="Guidlines"
                                        title="What is Escrow?"
                                        className=""
                                    />
                                    <div className="blog-article-content">
                                        <p>In today’s fast-paced digital economy, security in financial transactions is more critical than ever. Whether you're a freelancer, business owner, or online seller, ensuring that payments are processed safely and fairly is essential. Escrowly offers a cutting-edge escrow service designed to protect both buyers and sellers in cryptocurrency transactions, eliminating risks and fostering trust.</p>
                                        <h3>How Escrowly Ensures Safe Transactions</h3>
                                        <p>Our platform follows a straightforward process to guarantee security for both buyers and sellers:</p>
                                        <ol>
                                            <li>1. Transaction Agreement – The buyer and seller agree to the terms of the deal, ensuring clarity and mutual understanding</li>
                                            <li>2. Funds Secured – The buyer deposits cryptocurrency into our escrow system, keeping it securely stored</li>
                                            <li>3.Delivery & Confirmation – The seller delivers the product or service, and the buyer verifies satisfaction</li>
                                            <li>4. Funds Released – Once both parties confirm the terms are met, Escrowly transfers the funds to the seller, completing the transaction securely</li>
                                        </ol>
                                        <blockquote>At Escrowly, we prioritize security and transparency in digital transactions. By leveraging cutting-edge escrow technology, we protect buyers and sellers from fraud, ensuring every payment is safe, verified, and reliable. Join us in building a more secure digital economy</blockquote>
                                        <p>Escrowly provides a seamless and transparent way to conduct financial transactions, ensuring that funds are held securely until both parties fulfill their agreed-upon terms. By integrating an escrow system with cryptocurrency, we make digital payments safer, more efficient, and more reliable.</p>
                                        <h4>Benefits of Using Escrowly</h4>
                                        <p>Escrowly offers a reliable and secure platform for businesses and individuals engaged in online transactions. By utilizing advanced technologies and best practices, Escrowly ensures that all parties involved in a transaction can have peace of mind. Here’s how Escrowly protects your interests:</p>
                                        <ul>
                                            <li>Fraud Prevention: Ensures that payments are only processed when conditions are met.</li>
                                            <li>Secure Crypto Transactions: Reduces the risks of scams in the volatile crypto market.</li>
                                            <li>Trust & Transparency: Builds confidence between buyers and sellers, fostering long-term business relationships.</li>
                                            <li>Global Reach: Allows businesses and freelancers to operate securely across international borders.</li>
                                            <li>Automated Process: Simplifies complex transactions with a user-friendly system.</li>
                                        </ul>
                                        <h6>Future-Proof Your Transactions with Escrowly</h6>
                                        <p>As digital transactions continue to evolve, businesses and individuals need a secure and reliable payment system that adapts to changing financial landscapes. Escrowly is committed to providing the highest level of security for cryptocurrency transactions, ensuring that your payments are protected every step of the way.</p>
                                        <p>Ready to safeguard your digital transactions? Explore Escrowly today and experience the future of secure online payments.</p>
                                    </div>
                                </div>
                                <div className="col col-right">
                                    <h3>Start Buying or Selling Securelly</h3>
                                    <p className="mb-40">Enter the purchase price of your goods to estimate the escrow fee</p>
                                    <FeeCalculator />
                                    <h3 className="links-nav-title">What is Escrowly?</h3>
                                    <div className="links-nav">
                                        <Link className="active" to="/what-is-escrowly">
                                            What Is Escrow?
                                    </Link>
                                        <Link to="/allowed-goods">
                                            Allowed goods and services
                                    </Link>
                                        <Link to="/currency-options">
                                            Currency Options
                                    </Link>
                                        <Link to="/payment-options">
                                            Payment Options
                                    </Link>
                                        <Link to="/disbursements-methods">
                                            Disbursements Methods
                                    </Link>
                                        <Link to="/benefits">
                                            Benefits
                                    </Link>
                                        <Link to="/buyer-seller-broker-protection">
                                            Buyer, Seller, & Broker Protection
                                    </Link>
                                        <Link to="/how-it-works-broker">
                                            How it Works: Broker
                                    </Link>
                                        <Link to="/security">
                                            Security
                                    </Link>
                                        <Link to="/inspection-period">
                                            Inspection Period
                                    </Link>
                                        <Link to="/fraud-prevention">
                                            Fraud Prevention
                                    </Link>
                                        <Link to="/disputes">
                                            Disputes
                                    </Link>
                                        <Link to="/approved-carriers">
                                            Approved Carriers
                                    </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                    <Faq />
                    <Innovate />
                </main>
            </div>
        </>
    );
}

export default WhatIsEscrowly;