import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Header.scss';

function Header() {
	const {
		state: { cart },
	} = useContext(AppContext);

	const reducer = (acumulador, currentValue) => acumulador + currentValue.qty;

	const totalQty = cart.reduce(reducer, 0);

	return (
		<div className="Header">
			<Link to="/">
				<h1 className="Header-title">PlatziConf Merch</h1>
			</Link>
			<div className="Header-checkout">
				<Link to="/checkout">
					<i className="fas fa-cart-arrow-down fa-1x" title="Checkout" />
				</Link>
				{cart.length > 0 && <div className="Header-alert"> {totalQty} </div>}
			</div>
		</div>
	);
}

export default Header;
