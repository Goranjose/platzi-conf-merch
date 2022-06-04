import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import axios from 'axios';

function MapGoogle({ location }) {
	// const [location, setLocation] = useState([]);
	// const API = `http://api.positionstack.com/v1/forward?access_key=3671dc95b53cbc47b97a8493f660a6d0&query=${address}`;

	// useEffect(() => {
	// 	fetch(API)
	// 		.then((response) => response.json())
	// 		.then((data) => setLocation(data.data[0]));
	// }, []);

	const mapStyles = {
		height: '50vh',
		width: '100%',
	};

	const defaultCenter = {
		lat: location.latitude,
		lng: location.longitude,
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyDLRgfb7GZNd9G8tbdTw07ls-6znZrsHC0">
			<GoogleMap mapContainerStyle={mapStyles} zoom={8} center={defaultCenter}>
				<Marker position={defaultCenter} />
			</GoogleMap>
		</LoadScript>
	);
}

export default MapGoogle;
