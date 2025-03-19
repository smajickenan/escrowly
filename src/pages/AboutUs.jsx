import React from "react";
import Faq from "../sections/Faq/Faq";
import Innovate from "../sections/Innovate/Innovate";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import AboutEscrowly from "../sections/AboutEscrowly/AboutEscrowly";
import OurVision from "../sections/OurVision/OurVision";
import OurTeam from "../sections/OurTeam/OurTeam";
import Businesses from "../sections/Businesses/Businesses";
import OurBlogs from "../sections/OurBlogs/OurBlogs";

const AboutUs = () => (
    <div>
        <main className="main-content">
            <Breadcrumbs 
                breadcrumbs={[
                    { title: "Home", url: "/" },
                    { title: "About Us", url: "/about-us" },
                ]}
            />
            <AboutEscrowly/>
            <OurVision/>
            <OurTeam/>
            <Businesses/>
            <OurBlogs
                label="Our blogs"
                title="Crypto Insights & Resources"
            />
            <Faq/>
            <Innovate/>
        </main>
    </div>
);

export default AboutUs;