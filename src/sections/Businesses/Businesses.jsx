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
                    <img className='content-image' src="/images/integrations.jpg" alt="Escrowly API Guide" />
                </div>    
                <div className="col col-right">
                    <ul className="check-list">
                        <li>
                            <p>Crypto Escrow Revolution</p>
                            <span>First fully crypto-native escrow platform</span>
                        </li>
                        <li>
                            <p>Licensed and Registered</p>
                            <span>Compliant with U.S. Money Services Business</span>
                        </li>
                        <li>
                            <p>Price Protection</p>
                            <span>Powered by stable coins (USDT, USDC)</span>
                        </li>
                        <li>
                            <p>Fast Dispute Resolution</p>
                            <span>Built-in fraud prevention and dispute resolution</span>
                        </li>
                        <li>
                            <p>Connect Your Website</p>
                            <span>API-ready for fast integrations</span>
                        </li>
                    </ul>
                </div>    
            </div>    
        </div>
    </motion.section> 
  );
};

export default Businesses;
