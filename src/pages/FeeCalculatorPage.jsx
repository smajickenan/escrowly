import React from "react";
import { Helmet } from "react-helmet-async";
import Faq from "../sections/Faq/Faq";
import Innovate from "../sections/Innovate/Innovate";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import CryptoFeeCalculator from "../sections/CryptoFeeCalculator/CryptoFeeCalculator";
import FeesTransactions from "../sections/FeesTransactions/FeesTransactions";

const HomePage = () => (
    <>
        <Helmet>
            <title>Crypto Escrow Fee Calculator | Escrowly.com</title>
            <meta name="description" content="Estimate your crypto escrow fees instantly with Escrowly.com. Use our fee calculator for USDT, USDC, Bitcoin, and Ethereum transactions across industries." />
            <meta name="keywords" content="crypto escrow fees, Escrowly fee calculator, USDT escrow cost, Ethereum escrow fee, Bitcoin escrow fee, USDC escrow service, calculate escrow fees, crypto escrow platform, smart contract escrow cost, crypto transaction fee estimate, secure escrow payments, escrow calculator for domain sales, escrow for luxury assets, escrow for real estate deals" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Estimate Your Crypto Escrow Fees | Escrowly.com" />
            <meta property="og:description" content="Quickly calculate how much your secure crypto escrow will cost. Escrowly's transparent fee calculator helps you plan transactions with confidence." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>    
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "Fee Calculator", url: "/fee-calculator" },
                    ]}
                />
                <CryptoFeeCalculator/>
                <FeesTransactions/>
                <Faq/>
                <Innovate/>
            </main>
        </div>
    </>

);

export default HomePage;