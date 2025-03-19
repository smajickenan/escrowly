import React from "react";
import "./Blog.scss";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import PostCard from "../../components/PostCard/PostCard";
import Button from "../../components/Button/Button";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

const Blog = () => (
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
);

export default Blog;