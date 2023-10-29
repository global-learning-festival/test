import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import waterRefillIcon from '../assets/water-refill-icon.png';
import 'leaflet/dist/leaflet.css';

const MapComponent = (props) => {
  

 

  const position = [1.310411032362568, 103.77767848691333];
  const refill1 = [1.310411032362568, 103.77767848691333];

  const customIcon = L.icon({
    iconUrl: waterRefillIcon,
    iconSize: [18, 29],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });


  return (
    <div id='map'>
      <MapContainer
        center={position}
        zoom={16}
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
          url="https://maps-{s}.onemap.sg/v3/Default/{z}/{x}/{y}.png"
          attribution='Map data © <a href="https://www.onemap.sg/" target="_blank">OneMap</a>'
          token='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI4YmYzMDFhZWQ2NzY3NjJkZWQxZTgzYTQ0MWU5ODA1OCIsImlzcyI6Imh0dHA6Ly9pbnRlcm5hbC1hbGItb20tcHJkZXppdC1pdC0xMjIzNjk4OTkyLmFwLXNvdXRoZWFzdC0xLmVsYi5hbWF6b25hd3MuY29tL2FwaS92Mi91c2VyL3Bhc3N3b3JkIiwiaWF0IjoxNjk4MTE1MDMxLCJleHAiOjE2OTgzNzQyMzEsIm5iZiI6MTY5ODExNTAzMSwianRpIjoiMFRiTURPc2h0b1ZoOHZDOCIsInVzZXJfaWQiOjEzNjMsImZvcmV2ZXIiOmZhbHNlfQ.VU24uLUE0XPAsr-ZGfuDLeheqWfqqz3eDVVyaRRvE8o'
        />
       
        
        
        <Marker position={refill1} icon={customIcon}>
          <Popup>
            <div id='divRefill1'>
              <p id='Refill1P'>Water Refill #1</p>
              <button  id='#RefillButton'>
                Route to Water Refill 1
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
