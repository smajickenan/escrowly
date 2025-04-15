import React, { useState, useEffect } from "react";
import './FeeCalculator2.scss';
import { motion } from "motion/react";
import FormButton from "../FormButton/FormButton";
import Dropdown2 from "../Dropdown/Dropdown2";
import { Helmet } from "react-helmet-async"
import { useNavigate } from "react-router-dom";
import 'flag-icons/css/flag-icons.min.css';

const currencies = [
    { code: 'us', name: 'USD', sign: "$"  },
    { code: 'ca', name: 'CAD', sign: "$"  },
    { code: 'eu', name: 'EUR' , sign: "€" },
    { code: 'ae', name: 'AED', sign: "د"  },
    { code: 'cn', name: 'CNY', sign: "¥" },
    { code: 'jp', name: 'JPY', sign: "¥"  },
    { code: 'au', name: 'AUD', sign: "$"  }
];

const FeeCalculator2 = ({ paymentMethod = false, animation = true }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
    const navigate = useNavigate();
    const i = (animation) ? 1 : 0;

    useEffect(() => {
        // Check if user is authenticated
        const checkAuth = () => {
            const token = localStorage.getItem('authToken');
            setIsAuthenticated(!!token);
        };
        checkAuth();
    }, []);

    const handleStartEscrow = () => {
        if (isAuthenticated) {
            navigate('/dashboard');
        } else {
            navigate('/sign-in');
        }
    };

    const handleCurrencySelect = (item) => {
        const currencyName = item.props.children[1].props.children;
        const currency = currencies.find(c => c.name === currencyName);
        if (currency) {
            setSelectedCurrency(currency);
        }
    };

    return (
        <>
        <Helmet>
            <title>Start Crypto Escrow | Escrowly</title>
            <meta name="description" content="Start your crypto escrow transaction securely and easily with Escrowly. Safe and trusted service for online crypto deals." />
            
            {/* Open Graph tags */}
            <meta property="og:title" content="Start Crypto Escrow | Escrowly" />
            <meta property="og:description" content="Escrowly offers secure and fast crypto escrow transactions. Start now with trusted protection." />
            <meta property="og:image" content="/img/shield-og.jpg" />
            <meta property="og:url" content="https://escrowly.com" />
        </Helmet>
        <motion.form
            className="fee-calculator"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.5 * i, delay: 2.4 * i }}
        >
            <motion.div
                className="form-row"
                initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.5 * i, delay: 2.6 * i }}
            >
                <Dropdown2
                    className="dropdown-selling"
                    placeholder="Selling"
                    label="I'm"
                    items={['Selling', 'Buying', 'Brokering']}
                />

                <div className="from-separator"></div>

                <Dropdown2
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
                initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.5 * i, delay: 2.8 * i }}
            >
                <Dropdown2
                    className="dropdown-coin-1"
                    placeholder={<><span className={`fi fi-${currencies[0].code}`}></span> {currencies[0].name}</>}
                    items={currencies.map(currency => (
                        <div key={currency.code} className="currency-item">
                            <span className={`fi fi-${currency.code}`}></span>
                            <span className="currency-name">{currency.name}</span>
                        </div>
                    ))}
                    onSelect={handleCurrencySelect}
                />

                <div className="from-separator2"></div>

                <div className="form-input2">
                    <span>For {selectedCurrency.sign}</span>
                    <input className="input2"
                        type="number" 
                        defaultValue="800"
                        min="0"
                        max="10000000"
                        onInput={(e) => {
                            if (e.target.value > 10000000) {
                                e.target.value = 10000000;
                            }
                        }}
                    />
                </div>

                <div className="from-separator"></div>

                <Dropdown2
                    className="dropdown-coin"
                    placeholder={[
                        '/img/icon-crypto-tether.svg',
                        '/img/icon-crypto-usdc.svg',
                    ]}
                    items={[
                        <><img src="/img/icon-crypto-tether.svg" alt="" />USDT</>,
                        <><img src="/img/icon-crypto-usdc.svg" alt="" /> USDC</>,
                    ]}
                />
            </motion.div>
           

            {paymentMethod === true && (
                <div className="form-payment-method">
                    <p>The buyer will pay with :</p>

                    <motion.div
                        className="form-row"
                        initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                        transition={{ duration: 0.5 * i, delay: 2.6 * i }}
                    >
                        <Dropdown2
                            className="dropdown-payment-method"
                            placeholder="Wire"
                            label=""
                            items={['Wire', 'Credit Card or PayPal', 'Check or Money Order']}
                        />

                    </motion.div>
                    <p><span>$50.00</span> Standard Fee</p>
                </div>
            )}
            <div className="form-payment-method">
                <span>$50.00</span> Standard Fee
            </div>
            <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.5 * i, delay: 3 * i }}
            >
                <FormButton 
                    text="Calculate Fees" 
                    onClick={handleStartEscrow}
                />
            </motion.div>
        </motion.form>
        </>
    );
};

export default FeeCalculator2;
