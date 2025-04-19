import React from "react";
import { Helmet } from "react-helmet-async";
import "./HelpDeskSingle.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import HelpDeskItem from "../../components/HelpDeskItem/HelpDeskItem";
import SupportHours from "../../sections/SupportHours/SupportHours";
import Button from "../../components/Button/Button";

const helpQuestions = [
    "How does Escrowly ensure the security of my transactions?",
    "What payment methods do you support?",
    "Can I integrate Escrowly with my existing business systems?",
    "How quickly are funds released after a transaction is completed?",
    "Is Escrowly available for international transactions?",
    "Is Escrowly available for international transactions?",
    "Is Escrowly available for international transactions?"
];

const HelpDeskSingle = () => {
    

    return (
        <>
            <Helmet>
                <title>Live Help Desk & Contact Center | Escrowly.com Support</title>
                <meta name="description" content="Need help with your crypto escrow transaction? Contact Escrowly’s 24/7 support team. Live chat, instant help, and fast resolution for all crypto-related inquiries." />
                <meta name="keywords" content="Escrowly.com help desk, contact Escrowly, crypto support 24/7, live chat crypto escrow, Escrowly support center, crypto payment help, online escrow support, instant chat support, USDT support, USDC escrow support, secure crypto support, support for crypto deals" />
                <meta name="author" content="Escrowly Crypto Escrow Team" />
                <meta property="og:title" content="24/7 Crypto Escrow Support & Live Chat Help | Escrowly.com" />
                <meta property="og:description" content="Reach out to Escrowly’s dedicated support team for live chat, 24/7 assistance, and fast help with your escrow transactions. We’re here to assist you every step of the way." />
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
                            { title: "How does Escrowly ensure the security of my transactions?"}
                        ]}
                    />
                    
                    <section className="section-help-desk-single">
                        <div className="container">
                            <div className="help-desk-single-content">
                                <div className="col-left">
                                    <SectionHeader 
                                        label="Help Desk"
                                        title="How does Escrowly ensure the security of my transactions?"
                                        className=""
                                    /> 
                                    <p>Escrowly ensures the security of your transactions by utilizing a secure escrow system, where funds are held in a protected account until all agreed-upon conditions are met. This eliminates the risk of fraud and unauthorized fund transfers. Additionally, all transactions are encrypted using industry-standard SSL/TLS protocols to prevent data breaches and unauthorized access.</p>
                                    <p>To further enhance security, Escrowly implements multi-factor authentication (MFA) and strict identity verification (KYC/AML compliance) to ensure that only verified users can initiate and complete transactions. Advanced fraud detection algorithms continuously monitor transactions for suspicious activity, and a dedicated dispute resolution system is in place to handle any conflicts fairly and efficiently.</p>   
                                    <div className="rate-question">
                                        <span>Was this helpful?</span>
                                        <button>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.98633 12.2333L7.05299 13.8333C7.31966 14.0999 7.91966 14.2333 8.31966 14.2333H10.853C11.653 14.2333 12.5197 13.6333 12.7197 12.8333L14.3197 7.96661C14.653 7.03327 14.053 6.23327 13.053 6.23327H10.3863C9.98633 6.23327 9.65299 5.89994 9.71966 5.43327L10.053 3.29994C10.1863 2.69994 9.78633 2.03327 9.18633 1.83327C8.65299 1.63327 7.98633 1.89994 7.71966 2.29994L4.98633 6.3666" stroke="#030518" stroke-opacity="0.6" stroke-miterlimit="10"/>
                                                <path d="M1.58789 12.2332V5.69989C1.58789 4.76656 1.98789 4.43323 2.92122 4.43323H3.58789C4.52122 4.43323 4.92122 4.76656 4.92122 5.69989V12.2332C4.92122 13.1666 4.52122 13.4999 3.58789 13.4999H2.92122C1.98789 13.4999 1.58789 13.1666 1.58789 12.2332Z" stroke="#030518" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                        <button>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.0138 3.7666L8.94714 2.1666C8.68047 1.89993 8.08047 1.7666 7.68047 1.7666H5.14714C4.34714 1.7666 3.48047 2.3666 3.28047 3.1666L1.68047 8.03327C1.34714 8.9666 1.94714 9.7666 2.94714 9.7666H5.61381C6.01381 9.7666 6.34714 10.0999 6.28047 10.5666L5.94714 12.6999C5.81381 13.2999 6.21381 13.9666 6.81381 14.1666C7.34714 14.3666 8.01381 14.0999 8.28047 13.6999L11.0138 9.63327" stroke="#030518" stroke-opacity="0.6" stroke-miterlimit="10"/>
                                                <path d="M14.4134 3.76667V10.3C14.4134 11.2333 14.0134 11.5667 13.0801 11.5667H12.4134C11.4801 11.5667 11.0801 11.2333 11.0801 10.3V3.76667C11.0801 2.83333 11.4801 2.5 12.4134 2.5H13.0801C14.0134 2.5 14.4134 2.83333 14.4134 3.76667Z" stroke="#030518" stroke-opacity="0.6" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-right">
                                    <h4>Related Links</h4>
                                    <Button text="All Questions" icon="/img/btn-arrow-right-dark.svg" className="btn btn-link-dark"/>
                                    <ul className="help-desk-list">
                                        {helpQuestions.map((question, index) => (
                                            <HelpDeskItem key={index} question={question} />
                                        ))}
                                    </ul>
                                    <Button text="Get Help" icon="/img/btn-arrow-right.svg" />
                                </div>
                            </div>
                        </div>
                    </section> 
                    <SupportHours/>
                </main>
            </div>
        </>
    );
}

export default HelpDeskSingle;