import React from "react";
import Faq from "../../sections/Faq/Faq";
import Innovate from "../../sections/Innovate/Innovate";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import EscrowlyServices from "../../sections/EscrowlyServices/EscrowlyServices";

const Services = () => (
    <div>
        <main className="main-content">
            <Breadcrumbs 
                breadcrumbs={[
                    { title: "Home", url: "/" },
                    { title: "Escrowly Services", url: "/services" },
                ]}
            />
 
            <EscrowlyServices/>
            
            
            <Faq/>
            <Innovate/>
        </main>
    </div>
);

export default Services;