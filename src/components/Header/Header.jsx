import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.scss';
import { motion } from "motion/react";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import Button from "../Button/Button";

const Header = ({ className }) => {

    const [mobileMenu, setMobileMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMobileMenu(false);
    }, [location.pathname]);

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


    return (
        <motion.header
            className={`header ${className} ${mobileMenu ? "active" : ""} ${resetStyle ? "no-blur" : ""} ${scrolled ? "header-scrolling" : ""}`}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.8 }}
        >
            <div className="container">
                <div className="header-wrapper">
                    <Link to="/" className="logo"><img src={((className === "header-dark" && !mobileMenu) && !scrolled) ? "/img/logo-dark.svg" : "/img/logo.svg"} alt="" /></Link>
                    <ul className="main-menu">
                        <li className="has-sub-menu">
                            <Link to="/consumer">Consumer</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/consumer/learn-more">Learn more<span>How to use Escrowly</span></Link>
                                </li>
                                <li>
                                    <Link to="/consumer/benefits">Benefits<span>See the advantages of using Escrowly</span></Link>
                                </li>
                                <li>
                                    <Link to="/consumer/fees">Fees<span>Low transparent fees</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link to="/get-started">Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button text="Get Started Now" className="btn btn-primary" to="/get-started" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub-menu">
                            <Link to="/broker">Broker</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/broker/learn-more">Learn more<span>Learn how broker Escrow works</span></Link>
                                </li>
                                <li>
                                    <Link to="/broker/become-a-broker">Become a Broker<span>Act as a trusted third party</span></Link>
                                </li>
                                <li>
                                    <Link to="/broker/fees">Fees<span>Low transparent fees</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link to="/get-started">Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button text="Get Started Now" className="btn btn-primary" to="/get-started" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub-menu">
                            <Link to="/business">Business</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/business/learn-more">Learn more<span>How Escrow works for your business</span></Link>
                                </li>
                                <li>
                                    <Link to="/business/become-a-partner">Become a Partner<span>Grow your business and revenue</span></Link>
                                </li>
                                <li>
                                    <Link to="/business/benefits">Benefits<span>See the advantages of using Escrow</span></Link>
                                </li>
                                <li>
                                    <Link to="/business/fees">Fees<span>Low transparent fees</span></Link>
                                </li>
                                <li>
                                    <Link to="/business/escrow-pay">Escrow Pay<span>Simplest way to add escrow payments</span></Link>
                                </li>
                                <li>
                                    <Link to="/business/escrow-offer">Escrow Offer<span>Allow negotiation for your transactions</span></Link>
                                </li>
                                <li>
                                    <Link to="/business/escrow-buttons">Escrow Buttons<span>Create a button for Escrow transaction</span></Link>
                                </li>
                                <li>
                                    <Link to="/business/escrow-api">Escrow API<span>Get all benefits of Escrow via API</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link to="/get-started">Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button text="Get Started Now" className="btn btn-primary" to="/get-started" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub-menu">
                            <Link to="/developer">Developer</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/developer/api-integration">API Integration<span>Learn about Escrow API</span></Link>
                                </li>
                                <li>
                                    <Link to="/api-documentation">API Documentation<span>Built by developers for developers</span></Link>
                                </li>
                                <li>
                                    <Link to="/developer/escrow-pay">Escrow Pay<span>Escrow payment with one API call</span></Link>
                                </li>
                                <li>
                                    <Link to="/developer/escrow-offer">Escrow Offer<span>Receive offers via API</span></Link>
                                </li>
                                <li>
                                    <Link to="/developer/escrow-buttons">Escrow Buttons<span>Add Escrow Buttons to your website</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link to="/get-started">Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button text="Get Started Now" className="btn btn-primary" to="/get-started" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub-menu">
                            <Link to="/our-partners">Partners</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/get-started">Get Started <span>Description text example</span></Link>
                                </li>
                                <li>
                                    <Link to="/our-partners">Our Partners <span>Description text example</span></Link>
                                </li>
                                <li>
                                    <Link to="/partners-enquiry">Partners Enquiry <span>Description text example</span></Link>
                                </li>
                                <li>
                                    <Link to="/api-guide">API Guide <span>Description text example</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link to="/get-started">Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button text="Get Started Now" className="btn btn-primary" to="/get-started" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub-menu">
                            <Link to="/help">Help</Link>
                            <ul className="sub-menu">
                                <li>
                                    <Link to="/what-is-escrowly">What is Escrowly? <span>Learn how Escrowly.com works</span></Link>
                                </li>
                                <li>
                                    <Link to="/fees">Fees<span>Low transparent fees</span></Link>
                                </li>
                                <li>
                                    <Link to="/contact-us">Contact Us<span>Get in touch with us</span></Link>
                                </li>
                                <li>
                                    <Link to="tel:+1-415-801-2270">Call Us<span>+1-415-801-2270</span></Link>
                                </li>
                                <li>
                                    <Link to="/help-desk">Help Desk<span>Find answers to FAQs</span></Link>
                                </li>
                                <li>
                                    <Link to="/about-us">About Us<span>Learn about our company</span></Link>
                                </li>
                                <li className="bordered">
                                    <Link to="/get-started">Start A Transaction With Escrowly<span>Sell, buy or broker anything from domain names to real estate</span></Link>
                                    <Button text="Get Started Now" className="btn btn-primary" to="/get-started" icon="/img/btn-arrow-right.svg" />
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="secondary-menu">
                        <li>
                            <LanguageDropdown />
                        </li>
                        <li><Link to="/sign-in1" className="btn btn-link btn-sign-in">Sign In</Link></li>
                        <li><Link to="/sign-up1" className="btn btn-secondary">Sign Up</Link></li>
                        <button className="menu-btn" onClick={mobileMenuToggle}><span></span><span></span><span></span></button>
                    </ul>
                </div>
                <div className="mobile-menu-wrapper">
                    <div className="mobile-menu-content">
                        <span className="menu-label">Menu</span>
                        <ul className="mobile-menu">
                            <li><Link to="/sign-in1">Start A Transaction</Link></li>
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