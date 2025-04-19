import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from 'react-router-dom';
import "./styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
        <Router>
            <App />
        </Router>
    </HelmetProvider>
);
