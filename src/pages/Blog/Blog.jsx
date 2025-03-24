import React from "react";
import { Helmet } from "react-helmet-async";
import "./Blog.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import PostCard from "../../components/PostCard/PostCard";
import Button from "../../components/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Blog = () => (
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
                        { title: "Our Blog", url: "/blog" },
                    ]}
                />
                
                <section className="blog-articles">
                    <div className="container">
                        <SectionHeader 
                            label="Our Blogs"
                            title="Crypto Insights & Resources"
                            className=""
                        />
                        <div className="row xs-direction-column">
                            <div className="col">
                                <PostCard
                                    image="/images/post-image-1.jpg"
                                    title="The Future of Secure Crypto Transactions"
                                    category="Blockchain & Security"
                                    date="December 27, 2024"
                                    url="/blog-article"
                                />
                            </div> 
                            <div className="col">
                                <PostCard
                                    image="/images/post-image-2.jpg"
                                    title="How Escrowly Ensures Secure Crypto Payments"
                                    category="Crypto Transactions"
                                    date="December 27, 2024"
                                    url="/blog-article"
                                />
                            </div>    
                        </div>   
                        <div className="row xs-direction-column">
                            <div className="col">
                                <PostCard
                                    image="/images/post-image-3.jpg"
                                    title="How Escrow Enhances Online Transaction"
                                    category="E-commerce & Finance"
                                    date="December 27, 2024"
                                    url="/blog-article"
                                />
                            </div> 
                            <div className="col">
                                <PostCard
                                    image="/images/post-image-4.jpg"
                                    title="The Role of Smart Contracts in Digital Payments"
                                    category="FinTech & Automation"
                                    date="December 27, 2024"
                                    url="/blog-article"
                                />
                            </div>    
                        </div>  
                        <div className="row xs-direction-column">
                            <div className="col">
                                <PostCard
                                    image="/images/post-image-5.jpg"
                                    title="Global Transactions Made Easy with Escrow"
                                    category="International Business & Payments"
                                    date="December 27, 2024"
                                    url="/blog-article"
                                />
                            </div> 
                            <div className="col">
                                <PostCard
                                    image="/images/post-image-6.jpg"
                                    title="Preventing Fraud in the Crypto Space"
                                    category="Blockchain & Security"
                                    date="December 27, 2024"
                                    url="/blog-article"
                                />
                            </div>    
                        </div>  

                        <nav className="blog-nav">
                            <Button 
                                url="#get-started"
                                text="Next"
                                icon="/img/btn-arrow-right.svg"
                                delay={0}
                                className="btn-primary btn-next"
                            />  
                        </nav>
                    </div>
                </section> 
            </main>
        </div>
    </>
);

export default Blog;