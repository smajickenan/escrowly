import React from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const PartnersEnquiry = () => (
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
                            <div className="span time-to-read"><img src="/img/icon-time.svg" alt="" />4 min read</div>
                        </div>
                        <form
      className="salesForm"
      data-action="/api/sales"
      data-component="userSubmittedForm"
      noValidate
      data-form-name="sales-form"
      data-success-modal="modal-sales"
      role="form"
      aria-label="Sales form"
    >
      <div className="form-errors" data-target="form-error"></div>

      <fieldset>
        <legend>New partner enquiry form</legend>

        <div className="form-group">
          <div className="field" data-target="field" data-field="title">
            <label htmlFor="field-title">
              Title
            </label>
            <div>
              <select id="field-title" name="title" data-target="field-focusable">
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Ms">Ms.</option>
                <option value="Mx">Mx</option>
                <option value="Miss">Miss</option>
                <option value="Mister">Mister</option>
              </select>
            </div>
          </div>

          <div className="field" data-target="field" data-field="first-name">
            <label htmlFor="field-first-name">
              First name <sup>*</sup>
            </label>
            <div>
              <input
                type="text"
                id="field-first-name"
                name="first-name"
                required
                aria-describedby="error-first-name"
                data-max-length="100"
                autoComplete="off"
                data-target="field-focusable"
              />
            </div>
            <div className="field-error" data-target="field-error" data-attr="error-invalid">
              <span id="error-first-name">Please enter your first name.</span>
            </div>
          </div>

          <div className="field" data-target="field" data-field="last-name">
            <label htmlFor="field-last-name">
              Surname <sup>*</sup>
            </label>
            <div>
              <input
                type="text"
                id="field-last-name"
                name="last-name"
                required
                aria-describedby="error-last-name"
                data-max-length="100"
                autoComplete="off"
                data-target="field-focusable"
              />
            </div>
            <div className="field-error" data-target="field-error" data-attr="error-invalid">
              <span id="error-last-name">Please enter your surname.</span>
            </div>
          </div>

          <div className="field" data-target="field" data-field="email-address">
            <label htmlFor="field-email-address">
              What is your email address? <sup>*</sup>
            </label>
            <div>
              <input
                type="email"
                id="field-email-address"
                name="email-address"
                required
                aria-describedby="error-email-address"
                autoComplete="off"
                data-target="field-focusable"
              />
            </div>
            <div className="field-error" data-target="field-error" data-attr="error-invalid">
              <span id="error-email-address">Please enter a valid email address.</span>
            </div>
          </div>

          <div className="field" data-target="field" data-field="phone">
            <label htmlFor="field-phone">
              Phone number <sup>*</sup>
            </label>
            <div>
              <input
                type="text"
                id="field-phone"
                name="phone"
                required
                aria-describedby="error-phone"
                autoComplete="off"
                data-target="field-focusable"
              />
            </div>
            <div className="field-error" data-target="field-error" data-attr="error-invalid">
              <span id="error-phone">Please enter a valid phone number.</span>
            </div>
          </div>
        </div>
      </fieldset>
    </form>
                    </div>
                </section> 
            </main>
        </div>
    </>
);

export default PartnersEnquiry;