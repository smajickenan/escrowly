import React from "react";
import HowItWorks from "../sections/HowItWorks/HowItWorks";
import Faq from "../sections/Faq/Faq";
import Innovate from "../sections/Innovate/Innovate";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Guidlines from "../sections/Guidlines/Guidlines";

const HomePage = () => (
    <div>
        <main className="main-content">
            <Breadcrumbs 
                breadcrumbs={[
                    { title: "Home", url: "/" },
                    { title: "How It Works", url: "/how-it-works" },
                ]}
            />
            <HowItWorks/>
            <Guidlines/>
            <Faq/>
            <Innovate/>
        </main>
    </div>
);

export default HomePage;