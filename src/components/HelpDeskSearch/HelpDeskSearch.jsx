import React from 'react';
import "./HelpDeskSearch.scss";
import FormButton from '../FormButton/FormButton';

const HelpDeskSearch = ({ type }) => {
    

    return (
        <form action="#" className="help-desk-search">
            <input type="text" placeholder="Search Knowledge Domain" />
            <FormButton text="Get Help" icon="/img/btn-arrow-right.svg"/>
        </form>
    );
};

export default HelpDeskSearch;
