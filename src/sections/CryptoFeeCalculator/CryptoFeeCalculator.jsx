import React from "react";
import './CryptoFeeCalculator.scss';
import FeeCalculator2 from "../../components/FeeCalculator/FeeCalculator2";
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
                        <p>Enter the purchase price of your goods to estimate the escrow fee</p>
                        <FeeCalculator2
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