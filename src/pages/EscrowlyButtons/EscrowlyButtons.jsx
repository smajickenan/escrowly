import React from "react";
import { Link } from "react-router-dom";
import './EscrowlyButtons.scss';
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FeeCalculator from "../../components/FeeCalculator/FeeCalculator";
import Faq from "../../sections/Faq/Faq";
import Innovate from "../../sections/Innovate/Innovate";

const EscrowlyButtons = () => {
    return (
        <>
            <Helmet>
                <title>Escrowly Buttons - Easy Payment Integration | Escrowly</title>
                <meta name="description" content="Add secure escrow payment buttons to your website with Escrowly Buttons. Simple, customizable, and secure payment integration for any website." />
                <meta name="keywords" content="escrow buttons, payment buttons, Escrowly Buttons, secure checkout, payment integration, website buttons, escrow integration, secure payments, checkout buttons, payment processing" />
                <meta name="author" content="Escrowly Crypto Escrow Team" />
                <meta property="og:title" content="Escrowly Buttons – Easy Payment Integration" />
                <meta property="og:description" content="Add secure escrow payment buttons to your website in minutes. Our customizable buttons make it easy to accept secure payments." />
                <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
                <meta property="og:url" content="https://escrowly.com/escrowly-buttons" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div>
                <main className="main-content">
                    <Breadcrumbs
                        breadcrumbs={[
                            { title: "Home", url: "/" },
                            { title: "Business", url: "/business" },
                            { title: "Escrowly Buttons", url: "/escrowly-buttons" },
                        ]}
                    />

                    <section className="section-escrowly-buttons">
                        <div className="container">
                            <div className="row">
                                <div className="col col-left">
                                    <SectionHeader
                                        label="Integration"
                                        title="Escrowly Buttons"
                                        className=""
                                    />
                                    <div className="blog-article-content">
                                        <p>Escrowly Buttons provide a simple and effective way to add secure escrow payment functionality to any website. With just a few lines of code, you can integrate customizable payment buttons that enable secure transactions while maintaining your website's design and user experience.</p>
                                        
                                        <h3>How Escrowly Buttons Work</h3>
                                        <p>Our button integration process is designed for simplicity and security:</p>
                                        <ol>
                                            <li>1. Generate Button – Create a custom payment button in our dashboard</li>
                                            <li>2. Copy Code – Get the HTML/JavaScript code for your button</li>
                                            <li>3. Paste & Customize – Add the button to your website and customize its appearance</li>
                                            <li>4. Start Accepting Payments – Your button is ready to process secure transactions</li>
                                        </ol>

                                        <blockquote>Escrowly Buttons make secure payments accessible to everyone. Whether you're running an e-commerce store, a service-based business, or a marketplace, our buttons provide a simple way to accept secure escrow payments.</blockquote>

                                        <h4>Key Features of Escrowly Buttons</h4>
                                        <p>Escrowly Buttons offer a range of features to enhance your payment integration:</p>
                                        <ul>
                                            <li>Easy Integration: Add buttons with just a few lines of code</li>
                                            <li>Customizable Design: Match buttons to your website's style</li>
                                            <li>Multiple Payment Options: Support for various cryptocurrencies and payment methods</li>
                                            <li>Mobile Responsive: Works perfectly on all devices</li>
                                            <li>Secure Transactions: All payments are protected by escrow</li>
                                            <li>Analytics Dashboard: Track button performance and transactions</li>
                                        </ul>

                                        <h6>Get Started with Escrowly Buttons</h6>
                                        <p>Adding secure payment functionality to your website has never been easier. With Escrowly Buttons, you can start accepting secure escrow payments in minutes, without any complex integration or development work.</p>
                                        <p>Ready to add secure payment buttons to your website? Start using Escrowly Buttons today and provide your customers with a safe and convenient way to pay.</p>
                                    </div>
                                </div>
                                <div className="col col-right">
                                    <h3>Calculate Your Transaction Fees</h3>
                                    <p className="mb-40">Enter the transaction amount to estimate the escrow fee</p>
                                    <FeeCalculator />
                                    <h3 className="links-nav-title">Button Resources</h3>
                                    <div className="links-nav">
                                        <Link className="active" to="/escrowly-buttons">
                                            Overview
                                        </Link>
                                        <Link to="/button-creation">
                                            Button Creation
                                        </Link>
                                        <Link to="/customization">
                                            Customization
                                        </Link>
                                        <Link to="/integration-guide">
                                            Integration Guide
                                        </Link>
                                        <Link to="/security-features">
                                            Security Features
                                        </Link>
                                        <Link to="/faq">
                                            FAQ
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

export default EscrowlyButtons; 