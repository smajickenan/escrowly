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
            <title>Escrowly - Secure Crypto Escrow for Safe Online Transactions | Buy & Sell with Confidence</title>
            <meta name="description" content="Escrowly provides secure cryptocurrency escrow services for safe online transactions. Buy and sell online with zero chargeback risk." data-rh="true"/>
            <meta name="keywords" content="secure crypto escrow, secure online transactions, Escrowly, Bitcoin escrow, Ethereum escrow, crypto escrow service, smart contract escrow, blockchain escrow service, crypto escrow for businesses, USDT escrow, escrow wallet, secure P2P crypto escrow, escrow for digital items, escrow for domain names, escrow for real estate, crypto payment protection" data-rh="true"/>
            <meta name="author" content="Escrowly Crypto Escrow Team" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Escrowly – Buy & Sell Online Safely with Crypto Escrow" />
            <meta property="og:description" content="Buy and sell online with confidence using Escrowly. Our secure crypto escrow service ensures safe transactions for digital goods, services, and high-value assets with zero chargeback risk." />
            <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
            <meta property="og:site_name" content="Escrowly" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Escrowly - Secure Crypto Escrow" />
            <meta name="twitter:description" content="Buy and sell online with confidence using our secure crypto escrow service. Zero chargeback risk." />
            <meta name="twitter:image" content="https://escrowly.com/twitter-image.jpg" />

            {/* Additional SEO */}
            <link rel="canonical" href="https://escrowly.com" />
            <meta name="robots" content="index, follow" />

            {/* JSON-LD Structured Data */}
            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Escrowly",
                    "url": "https://escrowly.com",
                    "logo": "https://escrowly.com/img/logo.svg",
                    "description": "Escrowly provides secure cryptocurrency escrow services for safe online transactions.",
                     "sameAs": [
                        "https://twitter.com/escrowly",
                        "https://facebook.com/escrowly",
                        "https://linkedin.com/company/escrowly"
                    ],
                    "contactPoint": {
                        "@type": "ContactPoint",
                         "telephone": "+1-800-ESCROWLY",
                        "contactType": "customer service",
                        "email": "support@escrowly.com",
                        "areaServed": "Worldwide",
                        "availableLanguage": ["English"]
                    },
                     "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://escrowly.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }
                `}
            </script>

            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "Escrowly Crypto Escrow Service",
                    "description": "Secure cryptocurrency escrow service that protects both buyers and sellers in online transactions.",
                    "brand": {
                        "@type": "Brand",
                        "name": "Escrowly"
                    },
                    "offers": {
                        "@type": "AggregateOffer",
                        "priceCurrency": "USD",
                        "lowPrice": "0.00",
                        "highPrice": "0.00",
                        "offerCount": "1"
                    },
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "reviewCount": "1000"
                    },
                    "feature": [
                        "Secure crypto transactions",
                        "Smart contract protection",
                        "Global coverage",
                        "Instant settlements",
                        "Buyer-seller protection"
                    ]
                }
                `}
            </script>

            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "url": "https://escrowly.com",
                    "name": "Escrowly - Secure Crypto Escrow",
                    "description": "Secure cryptocurrency escrow services for safe online transactions.",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://escrowly.com/search?q={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }
                `}
            </script>

            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "serviceType": "Crypto Escrow Service",
                    "provider": {
                        "@type": "Organization",
                        "name": "Escrowly"
                    },
                    "name": "Cryptocurrency Escrow",
                    "description": "Secure escrow service for cryptocurrency transactions, ensuring safe online deals for buyers and sellers.",
                    "offers": {
                        "@type": "Offer",
                        "price": "0.00",
                        "priceCurrency": "USD"
                    }
                }
                `}
            </script>
        </Helmet>
        <div>
            <main className="main-content">
                <HomeBanner />
                <HowItWorks />
                <AboutUs />
                <OurServices />
                <AdvancedFeatures />
                <Testimonials />
                <Faq />
                <Innovate />
            </main>
        </div>
    </>
);

export default HomePage;
