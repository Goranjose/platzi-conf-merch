// import React, { useState, useEffect} from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// // import useGoogleAddress from '../hooks/useGoogleAddress';
// import '../styles/Map.scss';

// function MapLeaflet() {
// 	const [location, setLocation] = useState([]);
// 	const API = `http://api.positionstack.com/v1/forward?access_key=3671dc95b53cbc47b97a8493f660a6d0&query=Mexico`;
	
// 	const defaultCenter = {
//     lat: 9, lng: -70
//   }

// 	useEffect(() => {
// 		fetch(API)
// 			.then(response => response.json())
// 			.then(data => setLocation(data.data[0]))
// 	}, []);

// 	const position = [Math.trunc(location.latitude), Math.trunc(location.longitude)];

// 	const number = 9.0;

// 	return (
// 		<MapContainer center={defaultCenter} zoom={8} scrollWheelZoom={true}>
// 			<TileLayer
// 				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// 				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// 			/>
// 			<Marker position={defaultCenter}>
// 				<Popup>
// 					A pretty CSS3 popup. <br /> Easily customizable.
// 				</Popup>
// 			</Marker>
// 			<p>{`${position}  ${defaultCenter}  ${number}`}</p>
// 		</MapContainer>
// 	);
// }
// export default MapLeaflet;
