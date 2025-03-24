import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./HelpDesk.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import HelpDeskSearch from "../../components/HelpDeskSearch/HelpDeskSearch";
import HelpDeskItem from "../../components/HelpDeskItem/HelpDeskItem";
import SupportHours from "../../sections/SupportHours/SupportHours";

const helpQuestions = [
    "How does Escrowly ensure the security of my transactions?",
    "What payment methods do you support?",
    "Can I integrate Escrowly with my existing business systems?",
    "How quickly are funds released after a transaction is completed?",
    "Is Escrowly available for international transactions?",
    "Is Escrowly available for international transactions?",
    "Is Escrowly available for international transactions?"
];

const HelpDesk = () => {
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
                            { title: "Help Desk", url: "/help-desk" },
                        ]}
                    />
                    
                    <section className="section-help-desk">
                        <div className="container">
                            <SectionHeader 
                                label="Help Desk"
                                title="Help Desk Support & Assistance"
                                className="centered"
                            /> 
                            <p>Get fast and reliable support for all your needs</p>
                            <HelpDeskSearch/>
                            <div className="help-desk-content-wrapper">
                                <div className="help-desk-nav">
                                    <button
                                        onClick={() => setActiveTab('tab1')}
                                        className={activeTab === 'tab1' ? 'active' : ''}
                                    >
                                        Process
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('tab2')}
                                        className={activeTab === 'tab2' ? 'active' : ''}
                                    >
                                        Verification
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('tab3')}
                                        className={activeTab === 'tab3' ? 'active' : ''}
                                    >
                                        Shipment
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('tab4')}
                                        className={activeTab === 'tab4' ? 'active' : ''}
                                    >
                                        Payment
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('tab5')}
                                        className={activeTab === 'tab5' ? 'active' : ''}
                                    >
                                        Security
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('tab6')}
                                        className={activeTab === 'tab6' ? 'active' : ''}
                                    >
                                        Returns
                                    </button>
                                </div>
                                <div className="help-desk-content">
                                    {activeTab === 'tab1' && (
                                        <ul className="help-desk-list">
                                            {helpQuestions.map((question, index) => (
                                                <HelpDeskItem key={index} question={question} />
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                            <div className="help-desk-contacts">
                                <span>Support Hours <img src="/img/icon-time.svg" alt="" /> Mon-Fri, 8am to 11pm, Pacific.</span>
                                <span>USA and Canada (Toll Free) <img src="/img/icon-phone-outline.svg" alt="" /> +(480) 555-0103</span>
                            </div>
                        </div>
                    </section> 
                    <SupportHours/>
                </main>
            </div>
        </>
    );
}

export default HelpDesk;