import React from "react";
import './FeeCalculator.scss';
import { motion } from "motion/react";
import FormButton from "../FormButton/FormButton";
import Dropdown from "../Dropdown/Dropdown";

const FeeCalculator = ({paymentMethod=false, animation=true}) => {

    const i = (animation) ? 1 : 0;

    return (
        <motion.form 
            className="fee-calculator"
            initial={{ opacity: 0, filter: "blur(10px)"}}
            animate={{ opacity: 1, filter: "blur(0px)"}}
            transition={{ duration: 0.5 * i, delay: 2.4 * i }}
        >
            <motion.div 
                className="form-row"
                initial={{ opacity: 0, filter: "blur(5px)", y:20}}
                animate={{ opacity: 1, filter: "blur(0px)", y:0}}
                transition={{ duration: 0.5 * i, delay: 2.6 * i }}
            >
                <Dropdown 
                    className="dropdown-selling"
                    placeholder="Selling" 
                    label="I'm"
                    items={['Selling', 'Buying', 'Brokering']} 
                />
                
                <div className="from-separator"></div>

                <Dropdown 
                    className="dropdown-domain"
                    placeholder="Domain names, vehicles..." 
                    items={[
                        'A Domain Name', 
                        'A Motor Vehicle', 
                        'Milestone Transactions', 
                        'Online Goods & Digital Items', 
                        'Stock & Investment', 
                        'Luxury Items', 
                        'Real Estate'
                    ]} 
                />
            </motion.div>

            <motion.div 
                className="form-row"
                initial={{ opacity: 0, filter: "blur(5px)", y:20}}
                animate={{ opacity: 1, filter: "blur(0px)", y:0}}
                transition={{ duration: 0.5 * i, delay: 2.8 * i }}
            >
                <div className="form-input">
                    <span>For $</span>
                    <input type="number" defaultValue="800" />
                </div>
                
                <div className="from-separator"></div>

                <Dropdown 
                    className="dropdown-coin"
                    placeholder={[
                        '/img/icon-crypto-tether.svg',
                        '/img/icon-crypto-bitcoin.svg',
                        '/img/icon-crypto-etherium.svg',
                        '/img/icon-crypto-solana.svg',
                        '/img/icon-crypto-binance.svg',
                        '/img/icon-crypto-usdc.svg',
                        '/img/icon-crypto-cardano.svg'
                    ]}
                    items={[
                        <><img src="/img/icon-crypto-tether.svg" alt="" /> Tether (USDT)</>,
                        <><img src="/img/icon-crypto-bitcoin.svg" alt="" /> Bitcoin (BTC)</>,
                        <><img src="/img/icon-crypto-etherium.svg" alt="" /> Ethereum (ETH)</>,
                        <><img src="/img/icon-crypto-solana.svg" alt="" /> Solana (SOL)</>,
                        <><img src="/img/icon-crypto-binance.svg" alt="" /> Binance Coin (BNB)</>,
                        <><img src="/img/icon-crypto-usdc.svg" alt="" /> U.S. Dollar Coin (USDC)</>,
                        <><img src="/img/icon-crypto-cardano.svg" alt="" /> Cardano (ADA)</>
                    ]} 
                />
            </motion.div>

            {paymentMethod === true && (
                <div className="form-payment-method">
                    <p>The buyer will pay with :</p>

                    <motion.div 
                        className="form-row"
                        initial={{ opacity: 0, filter: "blur(5px)", y:20}}
                        animate={{ opacity: 1, filter: "blur(0px)", y:0}}
                        transition={{ duration: 0.5 * i, delay: 2.6 * i }}
                    >
                        <Dropdown 
                            className="dropdown-payment-method"
                            placeholder="Wire" 
                            label=""
                            items={['Wire', 'Credit Card or PayPal', 'Check or Money Order']} 
                        />

                    </motion.div>
                    <p><span>$50.00</span> Standard Fee</p>
                </div>
            )}
            
            <motion.div 
                initial={{ opacity: 0, filter: "blur(10px)", y:20}}
                animate={{ opacity: 1, filter: "blur(0px)", y:0}}
                transition={{ duration: 0.5 * i, delay: 3 } * i}
            >
                <FormButton text="Get Started Now"/>
            </motion.div>
        </motion.form>
    );
};

export default FeeCalculator;
