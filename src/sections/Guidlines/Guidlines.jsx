import React, { useState } from 'react';
import "./Guidlines.scss";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import GuideCard from '../../components/GuideCard/GuideCard';
import Button from '../../components/Button/Button';
// import Button from "../../components/Button/Button";

const Guidlines = () => { 
    const [activeTab, setActiveTab] = useState('tab1');

  return (
    <section className="section section-guidlines">
        <div className="container">
            <div className="row xs-direction-column guidlines-header">
                <div className="col">
                    <SectionHeader 
                        label="Guidelines"
                        title="Escrowly Guidelines for Secure Transactions"
                        className=""
                    />
                </div>
                <div className="col">
                    <p>Follow these simple guidelines to ensure a smooth, secure, and trustworthy experience for both buyers and sellers throughout the transaction process</p>
                </div>
            </div>
            
            <div className="tabs">
                <div className="tab-buttons">
                    <button
                        onClick={() => setActiveTab('tab1')}
                        className={activeTab === 'tab1' ? 'active' : ''}
                    >
                    Buyer Guide
                    </button>
                    <button
                        onClick={() => setActiveTab('tab2')}
                        className={activeTab === 'tab2' ? 'active' : ''}
                    >
                    Seller Guide
                    </button>
                    <button
                        onClick={() => setActiveTab('tab3')}
                        className={activeTab === 'tab3' ? 'active' : ''}
                    >
                    Broker Guide
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'tab1' && (
                        <div className="tab-content-wrapper">
                            <GuideCard
                                icon="/img/guide-icon-1.svg"
                                imgSrc={["/images/guide-image-1.jpg", "/images/guide-image-2.jpg"]}
                                title="Reserve Funds Securely"
                                subtitle="Reserve Payment with Confidence"
                                text="Securely set aside the agreed payment amount on Escrowly. This guarantees that both parties are committed to the transaction and provides peace of mind, knowing that the funds are safely held until the conditions are met"
                                type="image"
                            />
                            <GuideCard
                                icon="/img/guide-icon-2.svg"
                                imgSrc={["/images/guide-image-3.jpg"]}
                                title="Inspect and Confirm Satisfaction"
                                subtitle="Verify and Confirm Quality"
                                text="Once you receive the product or service, carefully inspect it to ensure it meets the agreed-upon standards. Only after confirming that everything is satisfactory, the payment is released to the seller, ensuring both parties are protected"
                                type="video"
                            />
                        </div>
                    )}
                    {activeTab === 'tab2' && (
                        <div>
                            <h2>Tab 2 Content</h2>
                            <p>Content for Tab 2.</p>
                        </div>
                    )}
                    {activeTab === 'tab3' && (
                        <div>
                            <h2>Tab 3 Content</h2>
                            <p>Content for Tab 3.</p>
                        </div>
                    )}
                </div>
            </div>
            <Button 
                url="#get-started"
                text="Get Started"
                icon="/img/btn-arrow-right.svg"
                delay={0}
                className="btn btn-primary"
            />  
        </div>
    </section> 
  );
};

export default Guidlines;
