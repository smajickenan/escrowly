import React from "react";
import { Helmet } from "react-helmet-async";
import Faq from "../../sections/Faq/Faq";
import Innovate from "../../sections/Innovate/Innovate";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import EscrowlyServices from "../../sections/EscrowlyServices/EscrowlyServices";

const Services = () => (
    <>
        <Helmet>
            <title>Secure Crypto Escrow Services | Escrowly.com</title>
            <meta name="description" content="Escrowly.com offers secure and transparent crypto escrow services for domains, vehicles, real estate, luxury goods, milestone projects, digital items, and more. Start safe crypto transactions now." />
            <meta name="keywords" content="crypto escrow, secure crypto payments, escrow for domains, motor vehicle escrow, milestone escrow, digital item escrow, luxury item escrow, real estate escrow, stock investment escrow, safe crypto deals" />
            <meta name="author" content="Escrowly Crypto Escrow Team" />
            <meta property="og:title" content="Safe & Transparent Crypto Escrow for All Transactions | Escrowly.com" />
            <meta property="og:description" content="From domain names to digital goods and real estate, Escrowly protects your crypto transactions with blockchain-backed escrow services. Start now." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div>
            <main className="main-content">
                <Breadcrumbs 
                    breadcrumbs={[
                        { title: "Home", url: "/" },
                        { title: "Escrowly Services", url: "/services" },
                    ]}
                />
    
                <EscrowlyServices/>
                
                
                <Faq/>
                <Innovate/>
            </main>
        </div>
    </>
);

export default Services;