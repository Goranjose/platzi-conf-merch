import React, { useContext } from 'react';
import { handleSumTotal } from '../utils/handleSumTotal';
import { Link } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
// import PayPalButton from '../components/PaypalButton';
import AppContext from '../context/AppContext';
import '../styles/Payment.scss';

function Payment() {
	const {
		state: { cart, buyer },
		addNewOrder,
	} = useContext(AppContext);

	const paypalOtions = {
		clientId:
			'AcF58NovYNWniAAVkPv9_C-IAY3YCBzIJBD6_CvV6fOwEYzudZt8LDiZiryq4lty8HJWktPjMR-Vpju1',
		intent: 'capture',
		currency: 'USD',
	};

	const buttonStyles = {
		layout: 'vertical',
		shape: 'rect',
	};

	const handlePaymentSuccess = (data) => {
		console.log(data);
		if (data.status === 'COMPLETED') {
			const newOrder = {
				buyer: buyer,
				product: cart,
				payment: data,
			};
			addNewOrder(newOrder);
			history.push('/checkout/success');
		}
	};

	const precioTotal = handleSumTotal(cart);

	return (
		<div className="Payment">
			<div className="Payment-content">
				<h3>Resumen del pedido:</h3>
				{cart.map((item) => (
					<div className="Payment-item" key={`${item.id}-${Math.random()}`}>
						<div className="Payment-element">
							<h4>
								{item.qty > 1
									? `${item.qty} ${item.title}s`
									: `${item.qty} ${item.title}`}
							</h4>
							<span>${precioTotal}</span>
						</div>
					</div>
				))}

				<div className="Payment-button">
					<Link to="/checkout/success">
						<button type="button">Paypal</button>
					</Link>
					{/* <PayPalButton
						paypalOptions={paypalOtions}
						buttonStyles={buttonStyles}
						amount={precioTotal}
						onPaymentStart={() => console.log('Start Payment')}
						onPaymentSuccess={(data) => handlePaymentSuccess(data)}
						onPaymentError={(error) => console.log(error)}
						onPaymentCancel={(data) => console.log(data)}
					/> */}
				</div>
			</div>
			<div />
		</div>
	);
}

export default Payment;
