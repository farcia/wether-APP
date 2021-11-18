import React from 'react';
import WeatherDetails from './WeatherDetails';

export default {
    title: 'Weather Details',
    componet: WeatherDetails
}

export const WeatherDetailsExample = () => (<WeatherDetails humidity={80} wind={10} />)