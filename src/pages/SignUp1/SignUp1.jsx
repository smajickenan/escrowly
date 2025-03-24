import React from "react";
import { Helmet } from "react-helmet-async";
import "./SignUp1.scss";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const SignUp1 = () => (
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
                <div className="login-wrapper">
                    <Link to="/" className="logo"><img src="/img/logo-dark.svg" alt="" /></Link>
                    <div className="login-container">
                        <LoginForm type="sign-up"/>
                    </div>
                </div>
            </main>
        </div>
    </>
);

export default SignUp1;