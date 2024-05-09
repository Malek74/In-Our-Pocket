import { Button } from '@nextui-org/react';
import React from 'react';

const googlemaps = () => {
    const handleButtonClick = () => {
        // Define the latitude and longitude of the location
        const latitude = 37.7749; // Example latitude (San Francisco)
        const longitude = -122.4194; // Example longitude (San Francisco)

        // Create the Google Maps URL with the specified location
        const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

        // Open the Google Maps URL in a new tab
        window.open(googleMapsUrl, '_blank');
    };

    return (
        <Button onClick={handleButtonClick}>Open Google Maps</Button>
    );
};

export default googlemaps;
