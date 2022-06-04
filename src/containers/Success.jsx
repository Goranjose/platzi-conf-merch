import React, { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
// import MapLeaflet from '../components/MapLeaflet';
import MapGoogle from '../components/MapGoogle';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/Success.scss';

function Success() {
	const {
		state: { buyer },
	} = useContext(AppContext);

	const location = useGoogleAddress(buyer[0].country + ' ' + buyer[0].city);

	return (
		<div className="Success">
			<div className="Success-content">
				<h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
				<span>Tu pedido llegara en 3 dias a tu direccion:</span>
				<div className="Success-map">
					<MapGoogle location={location} />
				</div>
			</div>
		</div>
	);
}

export default Success;
