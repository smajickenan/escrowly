import React, { useState, useEffect } from 'react';
import './UserLocation.scss';

const UserLocation = () => {
    const [countryCode, setCountryCode] = useState('');

    useEffect(() => {
        const fetchUserLocation = async () => {
            try {
                const response = await fetch('https://ipinfo.io/json?token=bc22631ccde9e3');
                const data = await response.json();
                console.log('IPINFO API Response:', data);
                if (data.country) {
                    const code = data.country.toLowerCase();
                    console.log('Country Code:', code);
                    setCountryCode(code);
                } else {
                    console.error('No country code in response:', data);
                }
            } catch (error) {
                console.error('Error fetching location:', error);
            }
        };

        fetchUserLocation();
    }, []);

    if (!countryCode) {
        console.log('No country code set');
        return null;
    }

    const flagUrl = `https://flagcdn.com/24x18/${countryCode}.png`;
    console.log('Flag URL:', flagUrl);

    return (
        <div className="user-location">
            <span className="separator">|</span>
            <div className="user-flag">
                <img 
                    src={flagUrl}
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