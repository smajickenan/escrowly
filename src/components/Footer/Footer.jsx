import React from "react";
// import { motion } from "motion/react";
import "./Footer.scss";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col footer-col-1">
                        <div className="footer-contact">
                            <a href="#index" className="logo">
                                <img src="/img/logo.svg" alt="Escrowly Logo" />
                            </a>
                            <p>The Global Leader In Online Crypto Escrow.</p>
                            <a href="tel:+4805550103" className="phone">
                                <img src="/img/icon-phone.svg" alt="Phone Icon" />
                                +(480) 555-0103
                            </a>
                            <LanguageDropdown />
                        </div>
                    </div>
                    <div className="col footer-col-2">
                        <ul className="footer-menu">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/fee-calculator">Fee Calculator</Link></li>
                            <li><Link to="/how-it-works">How it Works</Link></li>
                            <li><Link to="/api-documentation">API Documentation</Link></li>
                        </ul>
                    </div>
                    <div className="col footer-col-3">
                        <ul className="footer-menu">
                            <li>
                                <a href="/services">Escrowly Services</a>
                                <ul>
                                    <li><Link to="/crypto-escrow-services">Crypto Escrow Services</Link></li>
                                    <li><Link to="/service-page">Domain Name Escrow</Link></li>
                                    <li><Link to="/service-page3">Motor Vehicle Escrow</Link></li>
                                    <li><Link to="/service-page4">Milestone Transactions</Link></li>
                                    <li><Link to="/service-page5">Online Goods & Digital Items</Link></li>
                                    <li><Link to="/service-page6">Stock & Investment Escrow</Link></li>
                                    <li><Link to="/service-page7">Luxury Items Escrow</Link></li>
                                    <li><Link to="/service-page8">Real Estate Escrow</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col footer-col-4">
                        <ul className="footer-menu">
                            <li>
                                <a href="#url">Support</a>
                                <ul>
                                    <li><Link to="/payment-options">Payment Options</Link></li>
                                    <li><Link to="/approved-carriers">Approved Carriers</Link></li>
                                    <li><Link to="/fraud-prevention">Fraud Prevention</Link></li>
                                    <li><Link to="/report-a-bug">Report a Bug</Link></li>
                                    <li><Link to="/help-desk">Contact Us</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col footer-col-5">
                        <ul className="footer-menu">
                            <li>
                                <a href="#url">Partners</a>
                                <ul>
                                    <li><Link to="/get-started">Get Started</Link></li>
                                    <li><Link to="/our-partners">Our Partners</Link></li>
                                    <li><Link to="/partners-enquiry">Partners Enquiry</Link></li>
                                    <li><Link to="/api-guide">API Guide</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col footer-col-6">
                        <ul className="footer-menu">
                            <li>
                                <a href="#url">Policies</a>
                                <ul>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/aml-kyc-policy">AML & KYC Policy</Link></li>
                                    <li><Link to="/regulatory-compliance">Regulatory Compliance</Link></li>
                                    <li><Link to="/legal-security-policy">Legal Security Policy</Link></li>
                                    <li><Link to="/risk-disclosure">Risk Disclosure</Link></li>
                                    <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col footer-col-7">
                        <div className="row">
                            <div className="col col-1">
                                <div className="footer-social">
                                    <p>Follow us on</p>
                                    <ul className="footer-social-icons">
                                        <li><a href="https://www.instagram.com/escrowlyholdings/" target="_blank" rel="noopener noreferrer"><img src="/img/social-icon-instagram.svg" alt="Escrowly Instagram" /></a></li>
                                        <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src="/img/social-icon-facebook.svg" alt="Escrowly Facebook" /></a></li>
                                        <li><a href="https://www.youtube.com/@Escrowly" target="_blank" rel="noopener noreferrer"><img src="/img/social-icon-youtube.svg" alt="Escrowly Youtube" /></a></li>
                                        <li><a href="https://x.com/escrowly" target="_blank" rel="noopener noreferrer"><img src="/img/social-icon-twitter.svg" alt="Escrowly Twitter" /></a></li>
                                        <li><a href="https://www.linkedin.com/company/escrowly/" target="_blank" rel="noopener noreferrer"><img src="/img/social-icon-linkedin.svg" alt="Escrowly Linkedin" /></a></li>
                                    </ul>
                                    <a href="#url" className="btn-google-play">
                                        <img width="120" height="151" src="/images/btn-google-play.png" alt="Google Play" />
                                    </a>
                                    <a href="#url" className="btn-app-store">
                                        <img width="120" height="151" src="/images/btn-app-store.png" alt="App Store" />
                                    </a>
                                </div>
                            </div>
                            <div className="col col-2">
                                <div className="trustpilot">
                                    <p>Excellent</p>
                                    <div className="rating">
                                        <img src="/img/stars.svg" alt="Rating Stars" />
                                        <span>4.9</span>
                                    </div>
                                    <div className="trustpilot-info">
                                        <img src="/img/trustpilot-logo.svg" alt="Trustpilot Logo" />
                                        <p>Based on <a href="#trustpilot">856 reviews</a></p>
                                    </div>
                                </div>
                                <img src="/img/norton2.png" width="106" height="60" alt="Norton Security" className="norton" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p>
                                Escrowly.com operates in compliance with applicable regulations to provide a secure crypto escrow service.<br />
                                Escrowly LLC is a registered Money Services Business (MSB) with FinCEN and complies with all AML/KYC regulations.<br />
                                We are not a bank or a legal advisory firm. Learn more at 
                                <a href="https://www.fincen.gov/" target="_blank" rel="noopener noreferrer nofollow" className="text-blue-600 hover:underline">
                                    FinCEN.gov <img className="icon-globe" src="/img/globe-1.svg" alt="Globe Icon" />
                                </a>
                            </p>
                        </div>
                        <div className="col">
                            <p className="copyright">
                                Copyright © Escrowly™ and logo are trademarks of Escrowly LLC All rights reserved.<br />
                                <span>Regulated. Secure. Pioneering the Future of Secure Crypto Escrow</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
