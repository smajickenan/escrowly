import React, { useState } from "react";
import './FeesTransactions.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const FeesTransactions = function () {
    const cryptoTabs = [
        { id: 'tab1', icon: "/img/icon-crypto-tether.svg", label: "Tether (USDT)" },
        // { id: 'tab2', icon: "/img/icon-crypto-cardano.svg", label: "Litecoin (LTC)" },
        // { id: 'tab3', icon: "/img/icon-crypto-bitcoin.svg", label: "Bitcoin (BTC)" },
        // { id: 'tab4', icon: "/img/icon-crypto-etherium.svg", label: "Ethereum (ETH)" },
        // { id: 'tab5', icon: "/img/icon-crypto-solana.svg", label: "Solana (SOL)" },
        // { id: 'tab6', icon: "/img/icon-crypto-binance.svg", label: "Binance Coin (BNB)" },
        // { id: 'tab7', icon: "/img/icon-crypto-xrp.svg", label: "XRP (XRP)" },
        { id: 'tab8', icon: "/img/icon-crypto-usdc.svg", label: "U.S. Dollar Coin (USDC)" },
    ];

    const [activeTab, setActiveTab] = useState(cryptoTabs[0].id);

    const transactionData = [

        {
            amount: "$1 - $500",
            standard: "3.5%",
            concierge: "$10",
            noCharges: "No Charges"
        },
        {
            amount: "$500.01 - $5,000",
            standard: "2.5%",
            concierge: "$15",
            noCharges: "No Charges"
        },
        {
            amount: "$5000.01 - $10,000",
            standard: "2.2%",
            concierge: "$75",
            noCharges: "No Charges"
        },
        {
            amount: "$10,000.01 - $100,000",
            standard: "1.8%",
            concierge: "$150",
            noCharges: "No Charges"
        },
        {
            amount: "$100,000.01 - $500,000",
            standard: "1.5%",
            concierge: "$600",
            noCharges: "No Charges"
        },
        {
            amount: "$500,000.01 - $1,000,000",
            standard: "1.0%",
            concierge: "$2000",
            noCharges: "No Charges"
        },
        {
            amount: "$1,000,000.01 - $5,000,000",
            standard: "0.7%",
            concierge: "$4,500",
            noCharges: "No Charges"
        },
        {
            amount: "$5,000,000.01 - $10,000,000",
            standard: "0.4%",
            concierge: "$7,500",
            noCharges: "No Charges"
        },
        {
            amount: "$10,000,000+",
            standard: "0.2%",
            concierge: "Custom Quote",
            noCharges: "No Charges"
        },


    ];

    return (
        <section className="section section-fees-transactions">
            <div className="container">
                <div className="transactions-tabs">
                    <Swiper
                    className="swipper"
                        spaceBetween={13} 
                        loop={false} 
                        speed={"1000"}
                        slidesPerView={"auto"}
                    >
                        {cryptoTabs.map((tab) => (
                            <SwiperSlide key={tab.id} style={{ width: "auto" }}>
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`transaction-btn ${activeTab === tab.id ? 'active' : ''}`}
                                >
                                    <img src={tab.icon} alt={tab.label} />
                                    {tab.label}
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <h5>Fees for Transactions Using Escrowly (Crypto Payments)</h5>
                <div className="transactions-content">
                    {activeTab === 'tab1' && (
                        <div className="transactions-table">
                            <div className="th">
                                <div className="td">Transaction Amount (Crypto Amount)</div>
                                <div className="td">Fee Percentage</div>
                                <div className="td">Minimum Fee</div>
                                <div className="td">No Charges</div>
                            </div>
                            {transactionData.map((row, index) => (
                                <div className="tr" key={index}>
                                    <div className="td">
                                        <strong>Transaction Amount (Crypto Amount)</strong>
                                        <span>{row.amount}</span>
                                    </div>
                                    <div className="td">
                                        <strong>Standard</strong>
                                        <span>{row.standard}</span>
                                    </div>
                                    <div className="td">
                                        <strong>Concierge</strong>
                                        <span>{row.concierge}</span>
                                    </div>
                                    <div className="td">
                                        <strong>Payment Processing Fee</strong>
                                        <span>{row.noCharges}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    {activeTab === 'tab2' && (
                        <div className="transactions-content-item">2</div>
                    )}
                    {activeTab === 'tab3' && (
                        <div className="transactions-content-item">3</div>
                    )}
                    {activeTab === 'tab4' && (
                        <div className="transactions-content-item">4</div>
                    )}
                    {activeTab === 'tab5' && (
                        <div className="transactions-content-item">5</div>
                    )}
                    {activeTab === 'tab6' && (
                        <div className="transactions-content-item">6</div>
                    )}
                    {activeTab === 'tab7' && (
                        <div className="transactions-content-item">7</div>
                    )}
                    {activeTab === 'tab8' && (
                        <div className="transactions-table">
                        <div className="th">
                            <div className="td">Transaction Amount (Crypto Amount)</div>
                            <div className="td">Fee Percentage</div>
                            <div className="td">Minimum Fee</div>
                            <div className="td">No Charges</div>
                        </div>
                        {transactionData.map((row, index) => (
                            <div className="tr" key={index}>
                                <div className="td">
                                    <strong>Transaction Amount (Crypto Amount)</strong>
                                    <span>{row.amount}</span>
                                </div>
                                <div className="td">
                                    <strong>Standard</strong>
                                    <span>{row.standard}</span>
                                </div>
                                <div className="td">
                                    <strong>Concierge</strong>
                                    <span>{row.concierge}</span>
                                </div>
                                <div className="td">
                                    <strong>Payment Processing Fee</strong>
                                    <span>{row.noCharges}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    )}
                </div>
                <div className="blog-article-content">
                    <h3>Instantly Estimate Escrow Fees for Your Secure Crypto Transactions</h3>
                    <p>If you want to enjoy secure P2P crypto escrow transactions, you should know how much it costs to run your transactions. Users can get cost estimates before starting their secure crypto trade with Escrowly's Fee Calculator. Through its Fee Calculator system, Escrowly provides real-time estimates of payment costs that eliminate secret costs or unexpected charges.</p>
                    <p>Our platform enables users to evaluate the cost of our crypto escrow service, escrow for business acquisition, and escrow for machinery and heavy equipment before payments.</p>
                    <h3>How Escrow Fees Work</h3>
                    <p>Escrowly requires customers to pay a fee when using its services for secure crypto transactions. This fee covers:</p>
                    <ol>
                        <li>Transaction monitoring</li>
                        <li>Smart contract execution</li>
                        <li>Dispute resolution services</li>
                        <li>Buyer, seller, and broker protection</li>
                    </ol>
                    <p>
                        The fee gets taken from the escrow funds before the release of money to the parties involved. It depends on transaction size, 
                        currency type, and the additional agreed-upon services. Users can divide the fee payment or assign it to any party involved in the transaction. 
                        You can make these arrangements with complete transparency.
                    </p>

                    <h3>Try the Calculator</h3>
                    <p>
                        Users need to provide their deal value and their choice of crypto escrow service to receive a specific charge amount instantly.
                    </p>
                    <p>We currently support:</p>
                    <ul>
                        <li>USDT (Tether)</li>
                        <li>USDC (USD Coin)</li>
                    </ul>
                    <p>No fiat. No volatility. Just stable, reliable crypto escrow.</p>

                    <h3>Example Scenarios</h3>
                    <ol>
                        <li>Escrow for token sales: $50,000 in USDT → Estimated fee: $900</li>
                        <li>Escrow for Art and Collectables: $10,000 in USDC → Estimated fee: $220</li>
                        <li>Escrow for International Business Deals: $250,000 in USDT → Estimated fee: $3,750</li>
                    </ol>
                    <p>The calculator will allow you to simulate transaction processes and plan for future costs.</p>

                    <h3>Transparent Crypto Escrow - No Surprises</h3>
                    <p>
                        Escrowly operates as a platform specifically designed to remove all hidden charges, complex contractual obligations, 
                        and payment visibility concerns. Our platform prides itself on being the first completely crypto-founded escrow platform 
                        which transforms trading safety standards during modern digital times.
                    </p>
                    <p>It is perfect for:</p>
                    <ul>
                        <li>Escrow for Real Estate Closings</li>
                        <li>Escrow for E-commerce Stores</li>
                        <li>Escrow for Domain Name Marketplaces</li>
                        <li>Escrow for Digital items & Games and many more.</li>
                    </ul>
                    <p className="call-to-action">Use the Escrowly Fee Calculator</p>
                    <p className="tagline">Plan Smarter. Trade Safer. Only Pay What's Fair.</p>
                </div>
            </div>
            <section className="section-blog-article">
                    <div className="container">
                        <h1>Privacy Policy</h1>
                        <div className="post-meta">
                            <ul className="post-categories">
                                <li>Finance & Security</li>
                            </ul>
                            <span className="post-date">February 10, 2024</span>
                            <div className="span time-to-read"><img src="/img/icon-time.svg" alt="" />4 min read</div>
                        </div>
                        <div className="blog-article-content">
                            <p>In today’s fast-paced digital economy, security in financial transactions is more critical than ever. Whether you're a freelancer, business owner, or online seller, ensuring that payments are processed safely and fairly is essential. Escrowly offers a cutting-edge escrow service designed to protect both buyers and sellers in cryptocurrency transactions, eliminating risks and fostering trust.</p>
                            <h3>How Escrowly Ensures Safe Transactions</h3>
                            <p>Our platform follows a straightforward process to guarantee security for both buyers and sellers:</p>   
                            <ol>
                                <li>1. Transaction Agreement – The buyer and seller agree to the terms of the deal, ensuring clarity and mutual understanding</li>
                                <li>2. Funds Secured – The buyer deposits cryptocurrency into our escrow system, keeping it securely stored</li>
                                <li>3.Delivery & Confirmation – The seller delivers the product or service, and the buyer verifies satisfaction</li>
                                <li>4. Funds Released – Once both parties confirm the terms are met, Escrowly transfers the funds to the seller, completing the transaction securely</li>
                            </ol>
                            <blockquote>At Escrowly, we prioritize security and transparency in digital transactions. By leveraging cutting-edge escrow technology, we protect buyers and sellers from fraud, ensuring every payment is safe, verified, and reliable. Join us in building a more secure digital economy</blockquote>
                            <p>Escrowly provides a seamless and transparent way to conduct financial transactions, ensuring that funds are held securely until both parties fulfill their agreed-upon terms. By integrating an escrow system with cryptocurrency, we make digital payments safer, more efficient, and more reliable.</p>
                            <h4>Benefits of Using Escrowly</h4>
                            <p>Escrowly offers a reliable and secure platform for businesses and individuals engaged in online transactions. By utilizing advanced technologies and best practices, Escrowly ensures that all parties involved in a transaction can have peace of mind. Here’s how Escrowly protects your interests:</p>
                            <ul>
                                <li>Fraud Prevention: Ensures that payments are only processed when conditions are met.</li>
                                <li>Secure Crypto Transactions: Reduces the risks of scams in the volatile crypto market.</li>
                                <li>Trust & Transparency: Builds confidence between buyers and sellers, fostering long-term business relationships.</li>
                                <li>Global Reach: Allows businesses and freelancers to operate securely across international borders.</li>
                                <li>Automated Process: Simplifies complex transactions with a user-friendly system.</li>
                            </ul>
                            <h6>Future-Proof Your Transactions with Escrowly</h6>
                            <p>As digital transactions continue to evolve, businesses and individuals need a secure and reliable payment system that adapts to changing financial landscapes. Escrowly is committed to providing the highest level of security for cryptocurrency transactions, ensuring that your payments are protected every step of the way.</p>
                            <p>Ready to safeguard your digital transactions? Explore Escrowly today and experience the future of secure online payments.</p>
                        </div>
                    </div>
                </section> 
        </section>
    )
}

export default FeesTransactions;