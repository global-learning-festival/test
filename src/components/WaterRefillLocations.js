import React, { useEffect } from 'react';
import L from 'leaflet';

function WaterRefillLocations({ map }) {
    // Define water refill locations and their popup content here
    const waterRefillLocations = [
        {
            id: 1,
            lat: 1.310411032362568,
            lng: 103.77767848691333,
            name: 'Water Refill #1',
        },
        {
            id: 2,
            lat: 1.3089200745684473,
            lng: 103.78006591806651,
            name: 'Water Refill #2',
        },
    ];

    useEffect(() => {
        // Add water refill location markers and popups
        waterRefillLocations.forEach((location) => {
            const marker = L.marker([location.lat, location.lng], {
                icon: waterRefillIcon,
            }).addTo(map);

            marker.bindPopup(
                `<div style="text-align: center; padding: 5px;">
                    <p style="font-weight: bold; font-size: 16px;">${location.name}</p>
                    <button onclick={() => showRouteToWaterRefill(location)} style="background-color: #0077B6; color: #fff; border: none; padding: 5px 7px; margin-top: 5px; cursor: pointer; border-radius: 5px;">
                        Route to ${location.name}
                    </button>
                </div>`
            );
        });
    }, [map]);

    const waterRefillIcon = L.icon({
        iconUrl: 'water-refill-icon.png', // Replace with the path to your icon image
        iconSize: [18, 29], // Adjust the size as needed
        iconAnchor: [16, 32], // Adjust the anchor point as needed
        popupAnchor: [0, -32], // Adjust the popup anchor point as needed
    });

    const showRouteToWaterRefill = (destination) => {
        // Implement the routing logic here
        // You can use the L.Routing.control() to calculate and display the route
    };

    return (
        <div>
            {/* Render water refill location markers */}
            <div id="water-refill-locations">
                {/* Loop through water refill locations and render them */}
                {waterRefillLocations.map((location) => (
                    <div key={location.id}>
                        <p>{location.name}</p>
                        <button onClick={() => showRouteToWaterRefill(location)}>Route to {location.name}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WaterRefillLocations;
