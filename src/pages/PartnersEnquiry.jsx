import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const PartnersEnquiry = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add API call or other submit logic here
  };

  return (
    <>
      <Helmet>
        <title>Best Crypto Escrow - Escrowly</title>
        <meta name="description" content="Secure your crypto transactions with Escrowly, the trusted escrow service for crypto traders." />
        <meta name="keywords" content="secure crypto escrow, secure transactions, Escrowly, Bitcoin escrow, Ethereum escrow, crypto escrow service, smart contract escrow, blockchain escrow service, crypto escrow for businesses, USDT escrow service, escrow wallet for crypto, secure P2P crypto escrow, escrow for digital items, escrow for domain names, escrow for real estate" />
        <meta name="author" content="Escrowly Crypto Escrow Team" />
        <meta property="og:title" content="Escrowly – Buy & Sell Online Safely with Crypto" />
        <meta property="og:description" content="Buy and sell online with confidence using Escrowly. Our secure crypto escrow service ensures safe transactions for digital goods, services, and high-value assets." />
        <meta property="og:image" content="https://escrowly.com/og-image.jpg" />
        <meta property="og:url" content="https://escrowly.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div>
        <main className="main-content">
          <Breadcrumbs
            breadcrumbs={[
              { title: "Home", url: "/" },
              { title: "Partners", url: "/our-partners" },
              { title: "Partners Enquiry", url: "/partners-enquiry" },
            ]}
          />

          <section className="section-blog-article">
            <div className="container">
              <h1>Partners Enquiry</h1>
              <div className="post-meta">
                <ul className="post-categories">
                  <li>New Partner Inquiries</li>
                </ul>
              </div>

              <div className="blog-article-content">
                <p>Thank you for considering a partnership with Escrowly. Please fill out the form below, and we’ll gladly assist with any questions you have about partner accounts.</p>
                {/* (your full content above stays as-is) */}
                <h4>Partner Form</h4>

                {/* ===== Insert the Form Here ===== */}
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <legend>New Partner Enquiry Form</legend>
                    <div>
                      <label htmlFor="title">Title</label>
                      <select
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                      >
                        <option value="">Select Title</option>
                        <option value="Mr">Mr.</option>
                        <option value="Mrs">Mrs.</option>
                        <option value="Ms">Ms.</option>
                        <option value="Mx">Mx</option>
                        <option value="Miss">Miss</option>
                        <option value="Mister">Mister</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="firstName">
                        First Name <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName">
                        Surname <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email">
                        Email Address <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone">
                        Phone Number <span style={{ color: 'red' }}>*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <button type="submit">Submit</button>
                  </fieldset>
                </form>
                {/* ===== End of Form ===== */}
                
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default PartnersEnquiry;
