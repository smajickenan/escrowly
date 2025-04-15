import React, { useState, useEffect } from 'react';
import './UserLocation.scss';

const UserLocation = () => {
    const [countryCode, setCountryCode] = useState('');

    useEffect(() => {
        const fetchUserLocation = async () => {
            try {
                const response = await fetch(`https://ipinfo.io/lite/json?token=${process.env.REACT_APP_IPINFO_TOKEN}`);
                const data = await response.json();
                console.log('IPINFO API Response:', data);
                const code = data.country.toLowerCase();
                setCountryCode(code);
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        };

        fetchUserLocation();
    }, []);

    if (!countryCode) return null;

    return (
        <div className="user-location">
            <span className="separator">|</span>
            <div className="user-flag">
                <img 
                    src={`https://flagcdn.com/24x18/${countryCode}.png`}
                    srcSet={`https://flagcdn.com/48x36/${countryCode}.png 2x,
                            https://flagcdn.com/72x54/${countryCode}.png 3x`}
                    alt={`${countryCode} flag`}
                    width="24"
                    height="18"
                />
            </div>
        </div>
    );
};

export default UserLocation; 