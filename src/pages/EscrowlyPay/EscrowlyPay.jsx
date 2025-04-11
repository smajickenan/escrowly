import React from "react";
import { Link } from "react-router-dom";
import './EscrowlyPay.scss';
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FeeCalculator from "../../components/FeeCalculator/FeeCalculator";
import Faq from "../../sections/Faq/Faq";
import Innovate from "../../sections/Innovate/Innovate";

const EscrowlyPay = () => {
    return (
        <>
            <Helmet>
                <title>Escrowly Pay - Secure Payment Integration | Escrowly</title>
                <meta name="description" content="Integrate secure escrow payments into your website with Escrowly Pay. Simple, secure, and reliable payment processing for your business." />
                <meta name="keywords" content="escrow payment integration, secure payment processing, Escrowly Pay, payment gateway, crypto payment integration, secure checkout, payment API, escrow API, payment processing, secure transactions" />
                <meta name="author" content="Escrowly Crypto Escrow Team" />
                <meta property="og:title" content="Escrowly Pay – Secure Payment Integration" />
                <meta property="og:description" content="Add secure escrow payments to your website with Escrowly Pay. Protect your transactions with our reliable payment processing solution." />
                <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
                <meta property="og:url" content="https://escrowly.com/escrowly-pay" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div>
                <main className="main-content">
                    <Breadcrumbs
                        breadcrumbs={[
                            { title: "Home", url: "/" },
                            { title: "Business", url: "/business" },
                            { title: "Escrowly Pay", url: "/escrowly-pay" },
                        ]}
                    />

                    <section className="section-escrowly-pay">
                        <div className="container">
                            <div className="row">
                                <div className="col col-left">
                                    <SectionHeader
                                        label="Integration"
                                        title="Escrowly Pay"
                                        className=""
                                    />
                                    <div className="blog-article-content">
                                        <p>Escrowly Pay is a powerful payment integration solution that allows businesses to seamlessly incorporate secure escrow payments into their websites. Whether you're selling digital goods, services, or physical products, Escrowly Pay provides a secure and reliable way to process transactions while protecting both buyers and sellers.</p>
                                        
                                        <h3>How Escrowly Pay Works</h3>
                                        <p>Our platform offers a simple integration process that ensures secure transactions:</p>
                                        <ol>
                                            <li>1. Easy Integration – Add Escrowly Pay to your website with just a few lines of code</li>
                                            <li>2. Secure Transactions – All payments are held in escrow until both parties are satisfied</li>
                                            <li>3. Multiple Payment Options – Support for various cryptocurrencies and payment methods</li>
                                            <li>4. Automated Process – Streamlined payment flow with minimal manual intervention</li>
                                        </ol>

                                        <blockquote>Escrowly Pay revolutionizes online payments by combining the security of escrow with the flexibility of modern payment processing. Our solution ensures that every transaction is protected, giving both businesses and customers peace of mind.</blockquote>

                                        <h4>Key Features of Escrowly Pay</h4>
                                        <p>Escrowly Pay offers a comprehensive set of features designed to meet the needs of modern businesses:</p>
                                        <ul>
                                            <li>Simple Integration: Easy-to-implement API and SDK options</li>
                                            <li>Secure Transactions: All payments are protected by escrow</li>
                                            <li>Multiple Currencies: Support for various cryptocurrencies and fiat options</li>
                                            <li>Customizable UI: Match the payment interface to your brand</li>
                                            <li>Real-time Updates: Instant notifications for payment status</li>
                                            <li>Comprehensive Reporting: Detailed transaction analytics and reporting</li>
                                        </ul>

                                        <h6>Get Started with Escrowly Pay</h6>
                                        <p>Integrating Escrowly Pay into your website is quick and straightforward. Our developer-friendly documentation and support team will guide you through the process, ensuring a smooth implementation.</p>
                                        <p>Ready to enhance your payment processing with secure escrow? Start using Escrowly Pay today and provide your customers with the security they deserve.</p>
                                    </div>
                                </div>
                                <div className="col col-right">
                                    <h3>Calculate Your Transaction Fees</h3>
                                    <p className="mb-40">Enter the transaction amount to estimate the escrow fee</p>
                                    <FeeCalculator />
                                    <h3 className="links-nav-title">Integration Resources</h3>
                                    <div className="links-nav">
                                        <Link className="active" to="/escrowly-pay">
                                            Overview
                                        </Link>
                                        <Link to="/api-documentation">
                                            API Documentation
                                        </Link>
                                        <Link to="/integration-guide">
                                            Integration Guide
                                        </Link>
                                        <Link to="/payment-methods">
                                            Payment Methods
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

export default EscrowlyPay; 