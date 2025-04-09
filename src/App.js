import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/NotFound";
import BlogArticle from "./pages/BlogArticle/BlogArticle";
import Services from "./pages/Services/Services";
import ServicePage from "./pages/ServicePage/ServicePage";
import ServicePage2 from "./pages/ServicePage/ServicePage2";
import ServicePage3 from "./pages/ServicePage/ServicePage3";
import ServicePage4 from "./pages/ServicePage/ServicePage4";
import ServicePage5 from "./pages/ServicePage/ServicePage5";
import ServicePage6 from "./pages/ServicePage/ServicePage6";
import ServicePage7 from "./pages/ServicePage/ServicePage7";
import ServicePage8 from "./pages/ServicePage/ServicePage8";
import HowItWorksPage from "./pages/HowItWorksPage";
import FeeCalculatorPage from "./pages/FeeCalculatorPage";
import ApiDocumentation from "./pages/ApiDocumentation/ApiDocumentation";
import SignIn1 from "./pages/SignIn1/SignIn1";
import SignUp1 from "./pages/SignUp1/SignUp1";
import HelpDesk from "./pages/HelpDesk/HelpDesk";
import HelpDeskSingle from "./pages/HelpDeskSingle/HelpDeskSingle";
import OurPartners from "./pages/OurPartners";
import GetStarted from "./pages/GetStarted";
import PartnersEnquiry from "./pages/PartnersEnquiry";
import ApiGuide from "./pages/ApiGuide";
import PaymentOptions from "./pages/PaymentOptions";
import ApprovedCarriers from "./pages/PartnersEnquiry copy";
import FraudPrevention from "./pages/FraudPrevention";
import ReportABug from "./pages/ReportABug";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AMLKYCPolicy from "./pages/AMLKYCPolicy";
import RegulatoryCompliance from "./pages/RegulatoryCompliance";
import LegalSecurityPolicy from "./pages/LegalSecurityPolicy";
import RiskDisclosure from "./pages/RiskDisclosure";
import TermsAndConditions from "./pages/TermsAndConditions";
import WhatIsEscrowly from "./pages/WhatIsEscrowly/WhatIsEscrowly";

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

function MainLayout() {
  const location = useLocation();
  const isLight = location.pathname === "/";
  const hideHeaderFooter = ["/sign-in1", "/sign-up1"].includes(location.pathname);

  return (
    <div className="App">
      {!hideHeaderFooter && <Header className={isLight ? "header-light" : "header-dark"} />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-article" element={<BlogArticle />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service-page" element={<ServicePage />} />
        <Route path="/service-page2" element={<ServicePage2 />} />
        <Route path="/service-page3" element={<ServicePage3 />} />
        <Route path="/service-page4" element={<ServicePage4 />} />
        <Route path="/service-page5" element={<ServicePage5 />} />
        <Route path="/service-page6" element={<ServicePage6 />} />
        <Route path="/service-page7" element={<ServicePage7 />} />
        <Route path="/service-page8" element={<ServicePage8 />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/fee-calculator" element={<FeeCalculatorPage />} />
        <Route path="/api-documentation" element={<ApiDocumentation />} />
        <Route path="/sign-up1" element={<SignUp1 />} />
        <Route path="/sign-in1" element={<SignIn1 />} />
        <Route path="/help-desk" element={<HelpDesk />} />
        <Route path="/help-desk-single" element={<HelpDeskSingle />} />
        <Route path="/our-partners" element={<OurPartners />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/partners-enquiry" element={<PartnersEnquiry />} />
        <Route path="/api-guide" element={<ApiGuide />} />
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/approved-carriers" element={<ApprovedCarriers />} />
        <Route path="/fraud-prevention" element={<FraudPrevention />} />
        <Route path="/report-a-bug" element={<ReportABug />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/aml-kyc-policy" element={<AMLKYCPolicy />} />
        <Route path="/regulatory-compliance" element={<RegulatoryCompliance />} />
        <Route path="/legal-security-policy" element={<LegalSecurityPolicy />} />
        <Route path="/risk-disclosure" element={<RiskDisclosure />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/what-is-escrowly" element={<WhatIsEscrowly />} />

        {/* New routes for menu links */}
        <Route path="/consumer" element={<NotFound />} />
        <Route path="/consumer/learn-more" element={<NotFound />} />
        <Route path="/consumer/benefits" element={<NotFound />} />
        <Route path="/consumer/fees" element={<NotFound />} />

        <Route path="/broker" element={<NotFound />} />
        <Route path="/broker/learn-more" element={<NotFound />} />
        <Route path="/broker/become-a-broker" element={<NotFound />} />
        <Route path="/broker/fees" element={<NotFound />} />

        <Route path="/business" element={<NotFound />} />
        <Route path="/business/learn-more" element={<NotFound />} />
        <Route path="/business/become-a-partner" element={<NotFound />} />
        <Route path="/business/benefits" element={<NotFound />} />
        <Route path="/business/fees" element={<NotFound />} />
        <Route path="/business/escrow-pay" element={<NotFound />} />
        <Route path="/business/escrow-offer" element={<NotFound />} />
        <Route path="/business/escrow-buttons" element={<NotFound />} />
        <Route path="/business/escrow-api" element={<NotFound />} />

        <Route path="/developer" element={<NotFound />} />
        <Route path="/developer/api-integration" element={<NotFound />} />
        <Route path="/developer/escrow-pay" element={<NotFound />} />
        <Route path="/developer/escrow-offer" element={<NotFound />} />
        <Route path="/developer/escrow-buttons" element={<NotFound />} />

        <Route path="/help" element={<NotFound />} />
        <Route path="/fees" element={<NotFound />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
