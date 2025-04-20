import React from "react";
import "./EscrowlyServices.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const EscrowlyServices = () => (

    <section className="section-escrowly-services">
        <div className="container">
            <SectionHeader 
                label="Escrowly Services"
                title="Secure & Transparent Crypto Transactions"
                className=""
            />
            <div className="escrowly-services-list row">
                <div className="col">
                    <ServiceCard
                        icon="/img/service-1.svg"
                        title="General Escrow Services "
                        text="Secure transactions for goods, services, and contracts with full protection"
                        url="/crypto-escrow-services"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-2.svg"
                        title="Domain Name Escrow"
                        text="Ensure a safe and smooth transfer of domain ownership with escrow protection"
                        url="/service-page"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-3.svg"
                        title="Motor Vehicle Escrow "
                        text="Buy or sell vehicles confidently with funds securely held until transfer"
                        url="/service-page3"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-4.svg"
                        title="Milestone Transactions"
                        text="Release payments in stages for large projects, ensuring trust and accountability"
                        url="/service-page4"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-5.svg"
                        title="Online Goods & Digital Items"
                        text="Secure online purchases, including software, NFTs, virtual assets, and other digital goods"
                        url="/service-page5"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-6.svg"
                        title="Stock & Investment Escrow "
                        text="Secure stock trades and investment agreements with trusted escrow services"
                        url="/service-page6"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-7.svg"
                        title="Luxury Items Escrow "
                        text="Buy and sell high-value items like jewelry, watches, and collectibles with confidence"
                        url="/service-page7"
                    />
                </div>
                <div className="col">
                    <ServiceCard
                        icon="/img/service-8.svg"
                        title="Real Estate Escrow"
                        text="Protect real estate transactions by securely holding funds until all conditions are met"
                        url="/service-page8"
                    />
                </div>
            </div>
        </div>
    </section>
            
);

export default EscrowlyServices;