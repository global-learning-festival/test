import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';

import waterRefillIcon from '../assets/water-refill-icon.png';
import 'leaflet/dist/leaflet.css';

const MapComponent = (props) => {
  const [userLocation, setUserLocation] = useState(null);
  const [isRouting, setIsRouting] = useState(false);
  const [routingControl, setRoutingControl] = useState(null);
  const position = [1.310411032362568, 103.77767848691333];
  const refill = [
    { id: 1, coordinates: [1.310411032362568, 103.77767848691333], name: 'Water Refill #1' },
    { id: 2, coordinates: [1.309137, 103.775863], name: 'Water Refill #2' },
    // Add more refill locations as needed
  ];

  const customIcon = L.icon({
    iconUrl: waterRefillIcon,
    iconSize: [18, 29],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  const mapRef = useRef();

  const handleRouteButtonClick = (refillLocation) => {
    if (isRouting) {
      setRoutingControl(null);
      setIsRouting(false);
    } else {
      const routingControl = L.Routing.control({
        waypoints: [
          L.latLng(userLocation[0], userLocation[1]),
          L.latLng(refillLocation.coordinates[0], refillLocation.coordinates[1]),
        ],
        routeWhileDragging: true
      });
      routingControl.addTo(mapRef.current);
      setRoutingControl(routingControl);
      setIsRouting(true);
    }
  };


  

  useEffect(() => {
    // Use the Geolocation API to get the user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation([latitude, longitude]);
    });
  }, []);

  return (
    <div id="map">
      <MapContainer center={position} zoom={16} style={{ width: '100%', height: '600px' }} ref={mapRef}>
        <TileLayer
          url="https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://www.onemap.sg/" target="_blank">OneMap</a'
        />
        {/* Display a CircleMarker for the user's location */}
        {userLocation && (
          <CircleMarker center={userLocation} radius={5} color="red">
            <Popup>User's Location</Popup>
          </CircleMarker>
        )}
        {/* Map over each refill location and create a Marker for each */}
        {refill.map((refillLocation) => (
          <Marker key={refillLocation.id} position={refillLocation.coordinates} icon={customIcon}>
            <Popup>
              <div id={`divRefill${refillLocation.id}`}>
                <p id={`Refill${refillLocation.id}`}>{refillLocation.name}</p>
                <button
              id="RefillButton"
          onClick={() => (isRouting ? closeRoute() : handleRouteButtonClick(refillLocation))}
                >
            {isRouting ? 'Stop Routing' : `Route to ${refillLocation.name}`}
        </button>

              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
