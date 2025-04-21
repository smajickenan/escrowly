import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.scss';
import { motion } from "motion/react";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import Button from "../Button/Button";
import UserLocation from "../UserLocation/UserLocation";

const Header = ({ className }) => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileMenu(false);
    }, [location.pathname]);

    useEffect(() => {
        // Check if user is authenticated
        const checkAuth = () => {
            // TODO: Implement actual authentication check
            const token = localStorage.getItem('authToken');
            setIsAuthenticated(!!token);
        };
        checkAuth();
    }, []);

    function mobileMenuToggle() {
        setMobileMenu((prev) => !prev);
    }
    const [resetStyle, setResetStyle] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setResetStyle(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getStartedRoute = isAuthenticated ? '/dashboard' : '/sign-in';

    return (
        <motion.header
            className={`header ${className} ${mobileMenu ? "active" : ""} ${resetStyle ? "no-blur" : ""} ${scrolled ? "header-scrolling" : ""}`}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            <div className="container">
                <div className="header-wrapper">
                    <div className="logo-container">
                        <Link to="/" className="logo">
                        <Link to="/" className="logo"><img src={((className === "header-dark" && !mobileMenu) && !scrolled) ? "/img/logo_dark.svg" : "/img/logo.svg"} alt="" /></Link>
                        </Link>
                        <UserLocation />
                    </div>
                    <ul className="main-menu">
                        <li className="has-sub-menu">
                            <Link>Consumer</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/what-is-escrowly">Learn more<span>How to use Escrowly.com</span></Link>
                                </li>
                                <li>
                                    <Link to="/benefits">Benefits<span>See the advantages of using Escrowly</span></Link>
                                </li>
                                <li>
                                    <Link to="/fee-calculator">Fees<span>Low transparent fees</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link>Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button to={getStartedRoute} text="Get Started Now" className="btn btn-primary" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub-menu">
                            <Link to="/about-us">Broker</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/escrowly-broker">Learn more<span>Learn how Escrowly broker works</span></Link>
                                </li>
                                <li>
                                    <Link to="/broker">Become a Broker<span>Act as a trusted third party</span></Link>
                                </li>
                                <li>
                                    <Link to="/fee-calculator">Fees<span>Low transparent fees</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link>Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button to={getStartedRoute} text="Get Started Now" className="btn btn-primary" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub-menu">
                            <Link to="/about-us">Business</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/what-is-escrowly">Learn more<span>How Escrowly works for your business</span></Link>
                                </li>
                                <li>
                                    <Link>Become a Partner<span>Grow your business and revenue</span></Link>
                                </li>
                                <li>
                                    <Link to='/benefits'>Benefits<span>See the advantages of using Escrow</span></Link>
                                </li>
                                <li>
                                    <Link to="/fee-calculator">Fees<span>Low transparent fees</span></Link>
                                </li>
                                <li>
                                    <Link to="/escrowly-pay">Escrow Pay<span>Simplest way to add escrow payments</span></Link>
                                </li>
                                <li>
                                    <Link to="/escrowly-offer">Escrow Offer<span>Allow negotiation for your transactions</span></Link>
                                </li>
                                <li>
                                    <Link to="/escrowly-buttons">Escrow Buttons<span>Create a button for Escrow transaction</span></Link>
                                </li>
                                <li>
                                    <Link to="/api-guide">Escrow API<span>Get all benefits of Escrow via API</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link>Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button to={getStartedRoute} text="Get Started Now" className="btn btn-primary" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub-menu">
                            <Link to="/about-us">Developer</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/api-guide">API Integration<span>Learn about Escrowly API</span></Link>
                                </li>
                                <li>
                                    <Link to="/api-documentation">API Documentation<span>Build by coders for coders</span></Link>
                                </li>
                                <li>
                                    <Link to="/escrowly-pay">Escrowly Pay<span>Escrowly payment with simple API </span></Link>
                                </li>
                                <li>
                                    <Link to="/escrowly-offer">Escrowly Offer<span>Receive offers via API</span></Link>
                                </li>
                                <li>
                                    <Link to="/escrowly-buttons">Escrowly Buttons<span>Add Escrowly buttons to your website</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link>Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button to={getStartedRoute} text="Get Started Now" className="btn btn-primary" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub-menu">
                            <Link to="/our-partners">Partners</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/partner-signup">Partner Signup <span>Simplifying payments with low fees</span></Link>
                                </li>
                                <li>
                                    <Link to="/our-partners">Our Partners <span>Escrowly partners with world leaders</span></Link>
                                </li>
                                <li>
                                    <Link to="/partners-enquiry">Partners Inquiry <span>For partnership inquiries contact sales</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link>Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button to={getStartedRoute} text="Get Started Now" className="btn btn-primary" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub-menu">
                            <Link to="/about-us">Help</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/what-is-escrowly">What is Escrowly? <span>Learn how Escrow works</span></Link>
                                </li>
                                <li>
                                    <Link to="/fee-calculator">Fees<span>Low transparent fees</span></Link>
                                </li>
                                <li>
                                    <Link to="/help-desk">Contact Us<span>Get in touch with us</span></Link>
                                </li>
                                <li>
                                    <Link>Call Us<span>+1-415-801-2270</span></Link>
                                </li>
                                <li>
                                    <Link to="/help-desk">Help Desk<span>Find answers to FAQs</span></Link>
                                </li>
                                <li>
                                    <Link to="/about-us">About Us<span>Learn about our company</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link>Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button to={getStartedRoute} text="Get Started Now" className="btn btn-primary" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="secondary-menu">
                        <li>
                            <LanguageDropdown />
                        </li>
                        <li><Link to="/sign-in" className="btn btn-link btn-sign-in">Sign In</Link></li>
                        <li><Link to="/sign-up" className="btn btn-secondary">Sign Up</Link></li>
                        <button className="menu-btn" onClick={mobileMenuToggle}><span></span><span></span><span></span></button>
                    </ul>
                </div>
                <div className="mobile-menu-wrapper">
                    <div className="mobile-menu-content">
                        <span className="menu-label">Menu</span>
                        <ul className="mobile-menu">
                            <li><Link to={getStartedRoute}>Start A Transaction</Link></li>
                            <li><Link to="/how-it-works">How It Works</Link></li>
                            <li><Link to="/fee-calculator">Fee Calculator</Link></li>
                            <li><Link to="/services">Escrowly Services</Link></li>
                            <li><Link to="/api-documentation">API Documentation</Link></li>
                        </ul>
                        <a href="tel:+4805550103" className="phone"><img src="/img/icon-phone.svg" alt="" />+(480) 555-0103</a>
                        <LanguageDropdown dark={className === "header-dark"} />
                        <ul className="menu-social-icons">
                            <li><a href="#instagram"><img src="/img/social-icon-instagram.svg" alt="" /></a></li>
                            <li><a href="#facebook"><img src="/img/social-icon-facebook.svg" alt="" /></a></li>
                            <li><a href="#youtube"><img src="/img/social-icon-youtube.svg" alt="" /></a></li>
                            <li><a href="#twitter"><img src="/img/social-icon-twitter.svg" alt="" /></a></li>
                            <li><a href="#linkedin"><img src="/img/social-icon-linkedin.svg" alt="" /></a></li>
                        </ul>
                        <p className="copyright">
                            Copyright © and Trademarked 2023–2025 Escrowly LLC. All rights reserved. A Tech Company with a Crypto Licence
                        </p>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export default Header;