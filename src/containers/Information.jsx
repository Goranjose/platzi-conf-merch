import React, { useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/Information.scss';

function Information() {
	let navigate = useNavigate();
	function handleClickNav() {
		navigate('/checkout');
	}

	const {
		state: { cart },
		addToBuyer,
	} = useContext(AppContext);
	const form = useRef(null);

	const handleSubmit = () => {
		const formData = new FormData(form.current);
		const buyer = {
			name: formData.get('name'),
			email: formData.get('email'),
			address: formData.get('address'),
			apto: formData.get('apto'),
			city: formData.get('city'),
			country: formData.get('country'),
			state: formData.get('state'),
			cp: formData.get('cp'),
			phone: formData.get('phone'),
		};
		addToBuyer(buyer);
	};

	return (
		<div className="Information">
			<div className="Information-content">
				<div className="Information-head">
					<h2>Informacion de contacto:</h2>
				</div>
				<div className="Information-form">
					<form ref={form}>
						<label htmlFor="name">Nombre completo:</label>
						<input type="text" name="name" id="name" />

						<label htmlFor="email">Corro Electronico:</label>
						<input type="text" name="email" id="email" />

						<label htmlFor="address">Direccion:</label>
						<input type="text" name="address" id="address" />

						<label htmlFor="apto">Apto:</label>
						<input type="text" name="apto" id="apto" />

						<label htmlFor="city">Ciudad:</label>
						<input type="text" name="city" id="city" />

						<label htmlFor="country">Pais:</label>
						<input type="text" name="country" id="country" />

						<label htmlFor="state">Estado:</label>
						<input type="text" name="state" id="state" />

						<label htmlFor="cp">Codigo postal:</label>
						<input type="text" name="cp" id="cp" />

						<label htmlFor="phone">Telefono:</label>
						<input type="text" name="phone" id="phone" />
					</form>
				</div>
				<div className="Information-buttons">
					<button type="button" className="Information-back" onClick={handleClickNav}>
						Regresar
					</button>
					<Link to="/checkout/payment">
						<button type="button" className="Information-next" onClick={handleSubmit}>
							pagar
						</button>
					</Link>
				</div>
			</div>
			<div className="Information-sidebar">
				<h3>Pedido:</h3>
				{cart.map((item) => (
					<div className="Information-item" key={`${item.id}-${Math.random()}`}>
						<div className="Information-element">
							<h4>
								{item.qty > 1
									? `${item.qty} ${item.title}s`
									: `${item.qty} ${item.title}`}
							</h4>
							<span>${item.price * item.qty}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Information;

