import React from 'react';
import { motion } from "motion/react";
import "./OurBlogs.scss";
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import PostCard from '../../components/PostCard/PostCard';

const OurBlogs = ({label, title}) => { 


  return (
    <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="section section-our-blogs"
    >
        <div className="container">
            <SectionHeader 
                label={label}
                title={title}
            />
            <div className="row xs-direction-column">
                <div className="col">
                    <PostCard
                        image="/images/post-image-1.jpg"
                        title="The Future of Secure Crypto Transactions"
                        category="Blockchain & Security"
                        date="December 27, 2024"
                        url="#url"
                    />
                </div> 
                <div className="col">
                    <PostCard
                        image="/images/post-image-2.jpg"
                        title="How Escrowly Ensures Secure Crypto Payments"
                        category="Crypto Transactions"
                        date="December 27, 2024"
                        url="#url"
                    />
                </div>    
            </div>    
        </div>
    </motion.section> 
  );
};

export default OurBlogs;
