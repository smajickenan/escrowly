import React from "react";
import { Link } from "react-router-dom";
import './EscrowlyOffer.scss';
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import FeeCalculator from "../../components/FeeCalculator/FeeCalculator";
import Faq from "../../sections/Faq/Faq";
import Innovate from "../../sections/Innovate/Innovate";

const EscrowlyOffer = () => {
    return (
        <>
            <Helmet>
                <title>Escrowly Offer - Secure Negotiation Platform | Escrowly</title>
                <meta name="description" content="Facilitate secure negotiations and offers with Escrowly Offer. A platform designed for safe and transparent deal-making between buyers and sellers." />
                <meta name="keywords" content="escrow negotiation, secure offers, Escrowly Offer, deal negotiation, secure transactions, offer management, negotiation platform, secure deals, escrow platform, transaction security" />
                <meta name="author" content="Escrowly Crypto Escrow Team" />
                <meta property="og:title" content="Escrowly Offer – Secure Negotiation Platform" />
                <meta property="og:description" content="Make and receive secure offers with Escrowly Offer. Our platform ensures safe and transparent negotiations for all parties involved." />
                <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
                <meta property="og:url" content="https://escrowly.com/escrowly-offer" />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div>
                <main className="main-content">
                    <Breadcrumbs
                        breadcrumbs={[
                            { title: "Home", url: "/" },
                            { title: "Business", url: "/business" },
                            { title: "Escrowly Offer", url: "/escrowly-offer" },
                        ]}
                    />

                    <section className="section-escrowly-offer">
                        <div className="container">
                            <div className="row">
                                <div className="col col-left">
                                    <SectionHeader
                                        label="Negotiation"
                                        title="Escrowly Offer"
                                        className=""
                                    />
                                    <div className="blog-article-content">
                                        <p>Escrowly Offer is a specialized platform designed to facilitate secure negotiations and offers between buyers and sellers. Whether you're dealing with high-value items, services, or complex transactions, Escrowly Offer provides a safe environment for making and receiving offers while maintaining the security of escrow protection.</p>
                                        
                                        <h3>How Escrowly Offer Works</h3>
                                        <p>Our platform streamlines the negotiation process while ensuring security:</p>
                                        <ol>
                                            <li>1. Create Offer – Sellers can create detailed offers with specific terms and conditions</li>
                                            <li>2. Secure Communication – All negotiations take place within our secure platform</li>
                                            <li>3. Escrow Protection – Once an offer is accepted, funds are held in escrow</li>
                                            <li>4. Transaction Completion – Funds are released only when all terms are met</li>
                                        </ol>

                                        <blockquote>Escrowly Offer transforms the way deals are made by combining the flexibility of negotiation with the security of escrow. Our platform ensures that every offer and counter-offer is protected, creating a safe space for business transactions.</blockquote>

                                        <h4>Key Features of Escrowly Offer</h4>
                                        <p>Escrowly Offer provides a comprehensive set of features to support secure negotiations:</p>
                                        <ul>
                                            <li>Secure Messaging: Encrypted communication between parties</li>
                                            <li>Offer Management: Track and manage multiple offers efficiently</li>
                                            <li>Terms Customization: Set specific conditions for each offer</li>
                                            <li>Real-time Updates: Instant notifications for offer status changes</li>
                                            <li>Document Sharing: Securely share important documents</li>
                                            <li>Dispute Resolution: Built-in support for handling disagreements</li>
                                        </ul>

                                        <h6>Start Using Escrowly Offer</h6>
                                        <p>Whether you're a buyer looking to make an offer or a seller wanting to receive secure proposals, Escrowly Offer provides the tools you need for safe and efficient negotiations.</p>
                                        <p>Ready to transform your negotiation process? Start using Escrowly Offer today and experience secure deal-making at its best.</p>
                                    </div>
                                </div>
                                <div className="col col-right">
                                    <h3>Calculate Your Transaction Fees</h3>
                                    <p className="mb-40">Enter the offer amount to estimate the escrow fee</p>
                                    <FeeCalculator />
                                    <h3 className="links-nav-title">Offer Resources</h3>
                                    <div className="links-nav">
                                        <Link className="active" to="/escrowly-offer">
                                            Overview
                                        </Link>
                                        <Link to="/creating-offers">
                                            Creating Offers
                                        </Link>
                                        <Link to="/accepting-offers">
                                            Accepting Offers
                                        </Link>
                                        <Link to="/offer-terms">
                                            Offer Terms
                                        </Link>
                                        <Link to="/security-measures">
                                            Security Measures
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

export default EscrowlyOffer; 