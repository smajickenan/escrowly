import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./LoginForm.scss";
import FormButton from '../FormButton/FormButton';

const LoginForm = ({ type }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(prev => !prev);
    };

    return (
        <div className="login-form-wrapper">
            <h3>{type === "sign-up" ? "Open an Account" : "Sign In"}</h3>
            <p>The Global Leader In Online Crypto Escrow</p>
            <div className="social-login">
                <button className="btn btn-outline btn-social-login">
                    <img src="/img/icon-google.svg" alt="" />
                    Login in with Google
                </button>
                <button className="btn btn-outline btn-social-login">
                    <img src="/img/icon-apple.svg" alt="" />
                    Login in with Apple
                </button>
            </div>
            <div className="or"><span>or</span></div>
            <form className="login-form">
                <div className="input-row">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" placeholder="example@domain.com" />
                </div>
                <div className="input-row">
                    <label htmlFor="password">Password</label>
                    <a href="#url">Forgot password?</a>
                    <div className={`input-password ${showPassword ? "password-showing" : ""}`}>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="min 8 chars"
                        />
                        <button
                            className={`show-password ${showPassword ? "active" : ""}`}
                            onClick={togglePasswordVisibility}
                        >
                            <img src="/img/icon-eye.svg" alt="Toggle Password" />
                        </button>
                    </div>
                </div>
                <label htmlFor="terms" className="terms">
                    <input type="checkbox" name="terms" defaultChecked />
                    I {type === "sign-up" ? "hereby" : ""} agree to the <a href="#url">Terms & Conditions</a> of Escrowly
                </label>
                <FormButton text={type === "sign-up" ? "Sign Up" : "Sign In"} />
                <p className="align-left">{type === "sign-up" ? "Have" : "Don't have"} an account? <Link to={type === "sign-up" ? "/sign-in1" : "/sign-up1"}>{type === "sign-up" ? "Sign In" : "Open an Account"}</Link></p>
            </form>
        </div>
    );
};

export default LoginForm;
