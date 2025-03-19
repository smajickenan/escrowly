import React from "react";
import HomeBanner from "../sections/HomeBanner/HomeBanner";
import HowItWorks from "../sections/HowItWorks/HowItWorks";
import AboutUs from "../sections/AboutUs/AboutUs";
import OurServices from "../sections/OurServices/OurServices";
import AdvancedFeatures from "../sections/AdvancedFeatures/AdvancedFeatures";
import Testimonials from "../sections/Testimonials/Testimonials";
import Faq from "../sections/Faq/Faq";
import Innovate from "../sections/Innovate/Innovate";

const HomePage = () => (
    <div>
        <main className="main-content">
            <HomeBanner/>
            <HowItWorks/>
            <AboutUs/>
            <OurServices/>
            <AdvancedFeatures/>
            <Testimonials/>
            <Faq/>
            <Innovate/>
        </main>
    </div>
);

export default HomePage;