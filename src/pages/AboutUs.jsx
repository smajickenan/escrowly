import React from "react";
import { Helmet } from "react-helmet-async";
import Faq from "../sections/Faq/Faq";
import Innovate from "../sections/Innovate/Innovate";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import AboutEscrowly from "../sections/AboutEscrowly/AboutEscrowly";
import OurVision from "../sections/OurVision/OurVision";
import OurTeam from "../sections/OurTeam/OurTeam";
import Businesses from "../sections/Businesses/Businesses";
import OurBlogs from "../sections/OurBlogs/OurBlogs";

const AboutUs = () => (
    <>
        <Helmet>
            <title>About Escrowly.com | The First Fully Crypto-Native Escrow Platform</title>
            <meta name="description" content="Learn about Escrowly, the world’s first fully crypto-native escrow platform. Secure USDT & USDC escrow, FinCEN-registered, compliant, and built for decentralized transactions." />
            <meta name="keywords" content="about Escrowly, crypto-native escrow, decentralized escrow, USDT escrow service, USDC escrow platform, FinCEN MSB escrow, AML KYC crypto, compliant crypto escrow, blockchain escrow platform, peer to peer crypto escrow, crypto escrow for businesses, stablecoin escrow services, Escrowly mission, secure crypto transactions" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Escrowly.com | The World’s First Fully Crypto-Native Escrow Platform" />
            <meta property="og:description" content="Find out how Escrowly.com protects crypto transactions with stablecoin escrow, compliance, and trustless smart contracts. Built for businesses, freelancers, and marketplaces." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "About Us", url: "/about-us" },
                    ]}
                />
                <AboutEscrowly/>
                <OurVision/>

                <Businesses/>
                <OurBlogs
                    label="Our blogs"
                    title="Crypto Insights & Resources"
                />
                <Faq/>
                <Innovate/>
            </main>
        </div>
    </>

);

export default AboutUs;