// RoutingComponent.js
import React from 'react';
import { useMap } from 'react-leaflet';
import { RoutingMachine } from 'react-leaflet-routing-machine';

function RoutingComponent({ userLocation, refill1, isRouting }) {
  const map = useMap();

  return userLocation && isRouting ? (
    <RoutingMachine position="topleft" map={map} routeFrom={userLocation} routeTo={refill1} />
  ) : null;
}

export default RoutingComponent; // Ensure you have this export line
