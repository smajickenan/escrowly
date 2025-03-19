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
                            <img src="/img/logo.svg" alt="" />
                        </a> 
                        <p>The safest way to close your deal. Trusted by businesses, powered by technology.</p>
                        <a href="tel:+4805550103" className="phone"><img src="/img/icon-phone.svg" alt="" />+(480) 555-0103</a>
                        <LanguageDropdown/>
                    </div>
                </div>
                <div className="col footer-col-2">
                    <ul className="footer-menu">
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/fee-calculator">Fee Calculator </Link></li>
                        <li><Link to="/how-it-works">How it Works</Link></li>
                        <li><Link to="/api-documentation">API Documentation</Link></li>
                    </ul>
                </div>
                <div className="col footer-col-3">
                    <ul className="footer-menu">
                        <li>
                            <a href="#url">Escrowly Services</a>
                            <ul>
                                <li><Link to="/service-page2">General Escrowly Services</Link></li>
                                <li><Link to="/service-page">Domain Name Escrowly</Link></li>
                                <li><Link to="/service-page3"> Motor Vehicle Escrowly</Link></li>
                                <li><Link to="/service-page4"> Milestone Transactions</Link></li>
                                <li><Link to="/service-page5">Online Goods & Digital Items</Link></li>
                                <li><Link to="/service-page6"> Stock & Investment Escrowly</Link></li>
                                <li><Link to="/service-page7"> Luxury Items Escrowly</Link></li>
                                <li><Link to="/service-page8"> Real Estate Escrowly</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col footer-col-4">
                    <div className="row">
                        <div className="col">
                            <div className="footer-social">
                                <p>Social media</p>
                                <ul className="footer-social-icons">
                                    <li><a href="#instagram"><img src="/img/social-icon-instagram.svg" alt="" />Instagram</a></li>
                                    <li><a href="#facebook"><img src="/img/social-icon-facebook.svg" alt="" />Facebook</a></li>
                                    <li><a href="#youtube"><img src="/img/social-icon-youtube.svg" alt="" />YouTube</a></li>
                                    <li><a href="#twitter"><img src="/img/social-icon-twitter.svg" alt="" />Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col">
                            <div className="trustpilot">
                                <p>Excellent</p>
                                <div className="rating">
                                    <img src="/img/stars.svg" alt="" />
                                    <span>4.9</span>
                                </div>
                                <div className="trustpilot-info">
                                    <img src="/img/trustpilot-logo.svg" alt="" />
                                    <p>Based on <a href="#trustpilot">856 reviews</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copy">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Escrowly.com operates in compliance with applicable regulations to provide a secure crypto escrow <br/>service for transactions. We are not a bank, or legal advisory firm.</p>
                    </div>
                    <div className="col">
                        <p className="copyright">Copyright © Escrowly™ and logo are trademarks of Escrowly LLC All rights reserved. <br/>
                        Regulated. Secure. Pioneering the Future of Secure Crypto Escrow</p>
                    </div>
                </div>
            </div>
        </div>
    </footer> 
  );
};

export default Footer;
