import React, {useState}  from "react";
import { Link } from "react-router-dom";
import './Header.scss';
import { motion } from "motion/react";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";

const Header = ({ className }) => {

      const [mobileMenu, setMobileMenu] = useState(false)
      
      function mobileMenuToggle() {
        setMobileMenu((prev) => !prev);
      }

      return (
        <motion.header 
            className={`header ${className} ${mobileMenu ? 'active' : ''}`}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{
                duration: 0.6,
                delay: 0.8,
            }}
        >
        <div className="container">
            <div className="header-wrapper">
            <Link to="/" className="logo"><img src={(className === "header-dark" && !mobileMenu) ? "/img/logo-dark.svg" : "/img/logo.svg"} alt="" /></Link> 
                <ul className="main-menu">
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/blog">Our Blog</Link></li>
                    <li><Link to="/fee-calculator">Fee Calculator</Link></li>
                    <li><Link to="/how-it-works">How It Works</Link></li>
                    <li><Link to="/api-documentation">API Documentation</Link></li>
                    <li><Link to="/services">Escrowly Services</Link></li> 
                </ul> 
                <ul className="secondary-menu">
                    <li>
                        <LanguageDropdown/>
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
                        <li><a href="about-us.html">About Us</a></li>
                        <li><a href="fee-calculator.html">Fee Calculator</a></li>
                        <li><a href="how-it-works.html">How It Works</a></li>
                        <li><a href="api-documentation.html">API Documentation</a></li>
                        <li><a href="escrowly-services.html">Escrowly Services</a></li>
                    </ul>
                    <a href="tel:+4805550103" className="phone"><img src="/img/icon-phone.svg" alt="" />+(480) 555-0103</a>
                    <LanguageDropdown dark={className === "header-dark"} />
                    <ul className="menu-social-icons">
                        <li><a href="#instagram"><img src="/img/social-icon-instagram.svg" alt="" /></a></li>
                        <li><a href="#facebook"><img src="/img/social-icon-facebook.svg" alt="" /></a></li>
                        <li><a href="#youtube"><img src="/img/social-icon-youtube.svg" alt="" /></a></li>
                        <li><a href="#twitter"><img src="/img/social-icon-twitter.svg" alt="" /></a></li>
                    </ul>
                    <p className="copyright">
                        <a href="#copy">Copyright</a> © and Trademarked 2023–2025 Escrowly.com LLC. All rights reserved. A Tech Company with a Crypto Lic company
                    </p>
                </div>
            </div>
        </div>
    </motion.header>

      )
}

export default Header;