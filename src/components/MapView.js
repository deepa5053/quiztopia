import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { getUserLocation } from '../services/api';

const MapView = ({ setCoordinates }) => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { latitude, longitude } = await getUserLocation();
        setPosition([latitude, longitude]);
      } catch (error) {
        console.error('Geolocation error', error);
      }
    };

    fetchLocation();
  }, []);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
        setCoordinates({ lat: e.latlng.lat, lng: e.latlng.lng });
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  return (
    <MapContainer center={position} zoom={13} style={{ height: '50vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker />
    </MapContainer>
  );
};

export default MapView;
