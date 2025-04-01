import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const ContactUs = () => (
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
                        { title: "Support", url: "/our-partners" },
                        { title: "Contact Us", url: "/contact-us" },
                    ]}
                />
                
                <section className="section-blog-article">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <div className="post-meta">
                            <ul className="post-categories">
                                <li>Finance & Security</li>
                            </ul>
                            <span className="post-date">February 10, 2024</span>
                            <div className="span time-to-read"><img src="/img/icon-time.svg" alt="" />4 min read</div>
                        </div>
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
                </section> 
            </main>
        </div>
    </>
);

export default ContactUs;