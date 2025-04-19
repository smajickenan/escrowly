import React from 'react';
import { motion } from "motion/react";
import "./Businesses.scss";

const Businesses = () => { 


  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section section-businesses"
    >
        <div className="container">
            <div className="row">
                <div className="col col-left">
                    <h3>Built for a Safer Decentralized World</h3>
                    <p>Humans developed escrow solutions for traditional monetary systems; however, these solutions operate under slow processing times and bear substantial charges under centralized management. Escrowly flips the model. Our development of escrow started through implementing crypto infrastructure, which allows automated smart contracts in a decentralized system that operates in real time.</p>   
                    <div className="integrations">
                        <span className="num">100+</span>
                        Integrations with Top Platforms
                    </div>
                </div>    
                <div className="col col-center">
                    <img className='content-image' src="/images/integrations.jpg" alt="" />
                </div>    
                <div className="col col-right">
                    <ul className="check-list">
                        <li>
                            <p>Creative Minds</p>
                            <span>Finding new ways to enhance crypto transactions</span>
                        </li>
                        <li>
                            <p>Tech Gurus</p>
                            <span>Mastering blockchain and crypto security</span>
                        </li>
                        <li>
                            <p>Client-Centric</p>
                            <span>Focusing on secure, reliable transactions for you</span>
                        </li>
                        <li>
                            <p>Focused on Achievements</p>
                            <span>Delivering growth through safe digital solutions</span>
                        </li>
                        <li>
                            <p>Teamwork</p>
                            <span>Providing seamless crypto solutions together</span>
                        </li>
                    </ul>
                </div>    
            </div>    
        </div>
    </motion.section> 
  );
};

export default Businesses;
