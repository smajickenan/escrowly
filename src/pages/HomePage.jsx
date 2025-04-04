import React from "react";
import { Helmet } from "react-helmet-async";
import HomeBanner from "../sections/HomeBanner/HomeBanner";
import HowItWorks from "../sections/HowItWorks/HowItWorks";
import AboutUs from "../sections/AboutUs/AboutUs";
import OurServices from "../sections/OurServices/OurServices";
import AdvancedFeatures from "../sections/AdvancedFeatures/AdvancedFeatures";
import Testimonials from "../sections/Testimonials/Testimonials";
import Faq from "../sections/Faq/Faq";
import Innovate from "../sections/Innovate/Innovate";

const HomePage = () => (
    <>
        <Helmet>
            <title>Escrowly - Trusted Crypto Escrow for Safe Online Deals</title>
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
                <HomeBanner/>
                <HowItWorks/>
                <AboutUs/>
                <OurServices/>
                <AdvancedFeatures/>
                <Testimonials/>
                <Faq/>
                <Innovate/>
            </main>
        </div>
    </>
);

export default HomePage;
