import React from "react";
import Faq from "../sections/Faq/Faq";
import Innovate from "../sections/Innovate/Innovate";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import CryptoFeeCalculator from "../sections/CryptoFeeCalculator/CryptoFeeCalculator";
import FeesTransactions from "../sections/FeesTransactions/FeesTransactions";

const HomePage = () => (
    <div>
        <main className="main-content">
            <Breadcrumbs 
                breadcrumbs={[
                    { title: "Home", url: "/" },
                    { title: "Fee Calculator", url: "/fee-calculator" },
                ]}
            />
            <CryptoFeeCalculator/>
            <FeesTransactions/>
            <Faq/>
            <Innovate/>
        </main>
    </div>
);

export default HomePage;