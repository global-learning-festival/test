import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import Redmarker from '../assets/marker.png'
import L from 'leaflet';
import '../styles/marker.css'

const AdminMap = () => {

  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleMapClick = (e) => {
    setSelectedPosition(e.latlng);
  };



  const customIcon = L.icon({
    iconUrl: Redmarker,
    iconSize: [19, 35],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });


  // A custom component to handle right click events and display coordinates
  const RightClickDisplay = () => {
    const map = useMapEvents({
      contextmenu: (e) => {
        // Show the coordinates in the console
        console.log(e.latlng);
        // Display the coordinates in a div element with id="coordinates-display"
        const display = document.getElementById("coordinates-display");
        display.innerHTML = `Right click coordinates:<br>Latitude and Longitude:(${e.latlng.lat.toFixed(6)},${e.latlng.lng.toFixed(6)})`;
        // Set the selected position to the right click coordinates
        setSelectedPosition(e.latlng);
      }
    });

    
    
     
   
  };
   
 

  return (
    <div className="admin-map-container">
      <h1>Admin Map</h1>
      <MapContainer
        center={[1.3521, 103.8198]}
        zoom={13}
        style={{ height: '500px', width: '100%' }}
        onClick={handleMapClick}
      >
        <TileLayer
          url="https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.onemap.sg/">OneMap</a>'
        />
      
        {selectedPosition && (
          <Marker position={selectedPosition} icon={customIcon}>
            <Popup>Selected Location</Popup>
          </Marker>
        )}
        <RightClickDisplay />
      </MapContainer>
    
      <div id="coordinates-display" className="coordinates-display">
        Right click on the map to see the coordinates
      </div>
    </div>
  );
};

export default AdminMap;
