import React from "react";
import "./SupportHours.scss";
import Button from "../../components/Button/Button";

const SupportHours = () => {

  return (
    <section className="section section-support-hours">
        <div className="container">
            <div className="row xs-direction-column">
                <div className="col col-hours">
                    <h3>Support Hours</h3>
                    <ul className="support-hours-list">
                        <li><img src="/img/icon-time-white.svg" alt="" />Monday-Friday, 8am to 11pm, Pacific.</li>
                        <li><img src="/img/icon-phone-white.svg" alt="" />+(480) 555-0103<span></span>USA and Canada (Toll Free)</li>
                        <li><img src="/img/icon-phone-white.svg" alt="" />+(480) 555-0103<span></span>Australia (Toll Free)</li>
                        <li><img src="/img/icon-phone-white.svg" alt="" />+(480) 555-0103<span></span>Other countries</li>
                    </ul>
                    <Button text="Get Help" icon="/img/btn-arrow-right-dark.svg" className="btn btn-secondary"/>
                </div>
                <div className="col col-support-hours-image">
                    <img className="support-hours-image" src="/images/support-hours.jpg" alt="" />
                </div>
            </div>
        </div>
    </section> 
  );
};

export default SupportHours;
