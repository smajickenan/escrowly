import React, { useState } from "react";
import './FeesTransactions.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const FeesTransactions = function () {
    const cryptoTabs = [
        { id: 'tab1', icon: "/img/icon-crypto-tether.svg", label: "Tether (USDT)" },
        { id: 'tab2', icon: "/img/icon-crypto-cardano.svg", label: "Litecoin (LTC)" },
        { id: 'tab3', icon: "/img/icon-crypto-bitcoin.svg", label: "Bitcoin (BTC)" },
        { id: 'tab4', icon: "/img/icon-crypto-etherium.svg", label: "Ethereum (ETH)" },
        { id: 'tab5', icon: "/img/icon-crypto-solana.svg", label: "Solana (SOL)" },
        { id: 'tab6', icon: "/img/icon-crypto-binance.svg", label: "Binance Coin (BNB)" },
        { id: 'tab7', icon: "/img/icon-crypto-xrp.svg", label: "XRP (XRP)" },
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
                        <div className="transactions-content-item">8</div>
                    )}
                </div>

            </div>
        </section>
    )
}

export default FeesTransactions;