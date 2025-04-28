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
                  <li>Finance & Security</li>
                </ul>
                <span className="post-date">February 10, 2024</span>
                <div className="span time-to-read">
                  <img src="/img/icon-time.svg" alt="" />4 min read
                </div>
              </div>

              <div className="blog-article-content">
                <p>In today’s fast-paced digital economy, security in financial transactions is more critical than ever...</p>
                {/* (your full content above stays as-is) */}
                <h4>Benefits of Using Escrowly</h4>
                <p>Escrowly offers a reliable and secure platform...</p>
                <ul>
                  <li>Fraud Prevention: Ensures that payments are only processed when conditions are met.</li>
                  <li>Secure Crypto Transactions: Reduces the risks of scams in the volatile crypto market.</li>
                  <li>Trust & Transparency: Builds confidence between buyers and sellers...</li>
                  <li>Global Reach: Allows businesses and freelancers to operate securely across international borders.</li>
                  <li>Automated Process: Simplifies complex transactions with a user-friendly system.</li>
                </ul>
                <h6>Future-Proof Your Transactions with Escrowly</h6>
                <p>As digital transactions continue to evolve, businesses and individuals need a secure and reliable payment system...</p>
                <p>Ready to safeguard your digital transactions? Explore Escrowly today and experience the future of secure online payments.</p>

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
