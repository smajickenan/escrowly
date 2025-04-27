import React, { useState, useEffect } from "react";
import './FeeCalculator.scss';
import { motion } from "motion/react";
import FormButton from "../FormButton/FormButton";
import Dropdown from "../Dropdown/Dropdown";
import { Helmet } from "react-helmet-async"
import { useNavigate, useLocation } from "react-router-dom";
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


const calculateFee = (amount) => {
    if (amount <= 500) {
        return Math.max(amount * 0.035, 10); // 3.5% with $10 minimum
    } else if (amount <= 5000) {
        return Math.max(amount * 0.025, 15); // 2.5% with $15 minimum
    } else if (amount <= 10000) {
        return Math.max(amount * 0.022, 75); // 2.2% with $75 minimum
    } else if (amount <= 100000) {
        return Math.max(amount * 0.018, 150); // 1.8% with $150 minimum
    } else if (amount <= 500000) {
        return Math.max(amount * 0.015, 600); // 1.5% with $600 minimum
    } else if (amount <= 1000000) {
        return Math.max(amount * 0.01, 2000); // 1.0% with $2000 minimum
    } else if (amount <= 5000000) {
        return Math.max(amount * 0.007, 4500); // 0.7% with $4500 minimum
    } else if (amount <= 10000000) {
        return Math.max(amount * 0.004, 7500); // 0.4% with $7500 minimum
    } else {
        return "Custom Quote"; // For amounts over $10M
    }
};

const FeeCalculator = ({ paymentMethod = false, animation = true }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
     const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
      const [amount, setAmount] = useState(800);
         const [fee, setFee] = useState(calculateFee(800));
    const navigate = useNavigate();
    const location = useLocation();
    const i = (animation) ? 1 : 0;
    const isHomePage = location.pathname === "/";

    

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

    const handleAmountChange = (e) => {
        const value = parseFloat(e.target.value);
        if (value > 10000000) {
            e.target.value = 10000000;
            setAmount(10000000);
            setFee(calculateFee(10000000));
        } else {
            setAmount(value);
            setFee(calculateFee(value));
        }
    };

    return (
        <>
        <Helmet>
            <title>1Start Crypto Escrow | Escrowly</title>
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
                initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.5 * i, delay: 2.8 * i }}
            >
                               <Dropdown
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


                <div className="from-separator"></div>

                <div className="form-input">
                    <span>For {selectedCurrency.sign}</span>
                    <input
                        type="number" 
                        defaultValue={amount}
                        min="0"
                        max="10000000"
                        onChange={handleAmountChange}
                    />
                </div>

                <div className="from-separator"></div>

                <Dropdown
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

            {!isHomePage && (
                <div className="form-payment-method">
                    <span>{typeof fee === 'number' ? `${selectedCurrency.sign}${fee.toFixed(2)}` : fee}</span> Standard Fee
                </div>
            )}

            {paymentMethod === true && (
                <div className="form-payment-method">
                    <p>The buyer will pay with :</p>

                    <motion.div
                        className="form-row"
                        initial={{ opacity: 0, filter: "blur(5px)", y: 20 }}
                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
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
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.5 * i, delay: 3 } * i}
            >
                <FormButton 
                    text="Start Crypto Escrow" 
                    onClick={handleStartEscrow}
                />
            </motion.div>
        </motion.form>
        </>
    );
};

export default FeeCalculator;
