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
  const hideHeaderFooter = ["/sign-in1", "/sign-up1"].includes(location.pathname); // Скрывать на этих страницах

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
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
