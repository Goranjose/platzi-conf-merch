import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { handleSumTotal } from '../utils/handleSumTotal';
import '../styles/Checkout.scss';

function Checkout() {
	const {
		state: { cart },
		removeFromCart,
	} = useContext(AppContext);

	const handleRemove = (product) => {
		removeFromCart(product);
	};

	const precioTotal = handleSumTotal(cart);

	// const handleSumTotal = () => {
	// 	const reducer = (accumulator, currentValue) =>
	// 		accumulator + currentValue.price * currentValue.qty;
	// 	const sum = cart.reduce(reducer, 0);
	// 	return sum;
	// };

	return (
		<div className="Checkout">
			<div className="Checkout-content">
				{cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos... 😥</h3>}
				{cart.map((item) => (
					<div className="Checkout-item" key={`${item.id}-${Math.random()}`}>
						<div className="Checkout-element">
							<h4>{item.title}</h4>
							<span>Cantidad: {item.qty}</span>
							<span>${item.price} c/u</span>
							<span>Total: ${item.price * item.qty}</span>
						</div>
						<button type="button" onClick={() => handleRemove(item)}>
							<i className="fas fa-trash-alt" title="Eliminar" />
						</button>
					</div>
				))}
			</div>
			{cart.length > 0 && (
				<div className="Checkout-sidebar">
					<h3>{`Precio Total: $${precioTotal}`}</h3>
					<Link to="/checkout/information">
						<button type="button">Continuar pedido</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Checkout;
