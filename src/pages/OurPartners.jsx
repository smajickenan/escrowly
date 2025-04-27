import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const OurPartners = () => (
    <>
        <Helmet>
            <title>Secure Crypto Escrow - Escrowly | Trusted Blockchain Escrow Service</title>
            <meta name="description" content="Escrowly provides secure crypto escrow services for traders, businesses, and high-value transactions. Protect your digital assets with our trusted blockchain platform." />
            <meta name="keywords" content="crypto escrow, secure crypto transactions, blockchain escrow, escrow service for crypto, USDT escrow, Ethereum escrow, Bitcoin escrow, escrow for digital assets, escrow for businesses, smart contract escrow, P2P crypto escrow, escrow for real estate, escrow for domain names, crypto payment processor, Web3 escrow solutions" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Escrowly.com – Secure Crypto Escrow for Safe Transactions" />
            <meta property="og:description" content="Escrowly ensures safe crypto transactions for digital goods, services, and high-value assets. Join the trusted platform for secure escrow services in the crypto world." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "Partners", url: "/our-partners" },
                        { title: "Our Partners", url: "/our-partners" },
                    ]}
                />
                
                <section className="section-blog-article">
                    <div className="container">
                        <h1>Our Partners</h1>
                        <div className="post-meta">
                            <ul className="post-categories">
                                <li>Escrowly.com has teamed up with industry leading marketplaces and platforms to provide secure payment options.</li>
                            </ul>
                        </div>
                        <div className="blog-article-content">
                            <p>This is the time to become part of the advancing technology that protects cryptocurrency transactions at Escrowly.com. The Escrowly team aims to transform the escrow industry while developing a worldwide alliance that dedicates itself to establishing secure crypto transactions as the standard. As the first blockchain-native escrow platform, we provide companies, professionals, and platforms with a path to embed blockchain escrow services for expanding their revenue potential.</p>
                            <img className="w-full h-auto my-4 rounded-lg" src="/images/our-partners-02.webp" alt="Our All Partners"/>
                            <h3>Who Can Partner With Escrowly?</h3>
                            <p>We are eager to collaborate with:</p>   
                            <ul>
                                <li>Crypto Payment Processors</li>
                                <li>Web3 Platforms & DeFi Protocols</li>
                                <li>Brokers and Agents</li>
                                <li>E-commerce Platforms</li>
                                <li>Real Estate Marketplaces</li>
                                <li>Freelancer Networks</li>
                                <li>Business Acquisition Platforms, and Many more</li>
                            </ul>
                            <blockquote>Escrowly provides a secure, effortless, and dependable solution for crypto escrow service, escrow service for high-value goods, and cross-border crypto escrow through its platform.</blockquote>
                            <h3>Why Partner With Us?</h3>
                            <p>Escrowly stands as your ideal provider of the best crypto escrow services because of these key characteristics:</p>
                            <ul>
                                <li>Our platform embraces only USDT and USDC as secure and stable currencies that exist specifically for Web3 requirements.</li>
                                <li>Our company exists as a verified Money Services Business (MSB) with registration on FinCEN.gov.</li>
                                <li>You can integrate Escrowly API into your platform for smooth, secure transactions.</li>
                                <li>Our escrow solutions can be customized to meet the requirements of every business, where we enable transactions from escrow for freelancers selling domain names to escrow for machinery and heavy equipment.</li>
                                <li>You will receive revenue share opportunities that allow you to build up your brand and profits whenever a safe deal transaction occurs.</li>
                            </ul>
                            <h3>Real Protection for Real Deals</h3>
                            <p>Partnering with Escrowly.com provides users complete access to our fraud protection system, dispute resolution services, alongside inspection period guarantees for all participants. Our system provides solutions tailored to handle escrow for contractor payments, escrow for car lease payments, and other high-stakes transactions.</p>
                            <img className="w-full h-auto my-4 rounded-lg" src="/images/our-partners-01.webp" alt="Our Partners"/>
                            <h3>Ready to Collaborate?</h3>
                            <p>Together, we can build a smart, secure digital world.</p>
                            <p>fill out our Partnership form</p>
                        </div>
                    </div>
                </section> 
            </main>
        </div>
    </>
);

export default OurPartners;