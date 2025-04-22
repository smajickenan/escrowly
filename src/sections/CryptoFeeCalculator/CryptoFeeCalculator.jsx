import React from "react";
import './CryptoFeeCalculator.scss';
import FeeCalculator from "../../components/FeeCalculator/FeeCalculator";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const CryptoFeeCalculator = function () {
    
    return (
        <section className="section-crypto-fee-calculator">
            <div className="container">
                <div className="row">
                    <div className="col col-left">
                        <SectionHeader 
                            label="Crypto Fee Calculator"
                            title="Fee Calculator"
                            className=""
                        />
                        <p>Enter your item’s price to see the escrow fee</p>
                        <FeeCalculator
                            paymentMethod={false}
                            animation={false}
                        />
                    </div>
                    <div className="col col-right">
                        <img src="/images/fee-calculator-image.svg" alt="" className="fee-calculator-image" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CryptoFeeCalculator;