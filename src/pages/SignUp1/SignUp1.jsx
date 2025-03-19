import React from "react";
import "./SignUp1.scss";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const SignUp1 = () => (
    <div>
        <main className="main-content">
            <div className="login-wrapper">
                <Link to="/" className="logo"><img src="/img/logo-dark.svg" alt="" /></Link>
                <div className="login-container">
                    <LoginForm type="sign-up"/>
                </div>
            </div>
        </main>
    </div>
);

export default SignUp1;