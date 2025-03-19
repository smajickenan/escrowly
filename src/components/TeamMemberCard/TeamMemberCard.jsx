import React from "react";
// import { motion } from "motion/react";
import "./TeamMemberCard.scss";

const TeamMemberCard = ({ img, name, position}) => {

  return (
    <div className="team-member-card">
        <img src={img} alt="" />
        <h6>{name}</h6>
        <p>{position}</p>
    </div>
  );
};

export default TeamMemberCard;
