import React from 'react';
import './City.css';

const City = ({cities}) => {
    return (
        <div>
            <div className="city-name">
                {cities[0].name}
            </div>
            <div className="city-temp">
                {cities[0].temperature}° C
            </div>
            <div className="city-weather">
                {cities[0].weather}
            </div>
        </div>
    );
};

export default City;