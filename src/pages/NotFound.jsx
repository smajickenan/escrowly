import React from "react";
import Faq from "../sections/Faq/Faq";
import Innovate from "../sections/Innovate/Innovate";

const NotFound = () => (
    <div>
        <main className="main-content">
            <h1>Page Not Found!</h1>
            <Innovate/>
            <Faq/>
        </main>
    </div>
);

export default NotFound;