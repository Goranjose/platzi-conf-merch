import React, { useEffect } from 'react';

function PaypalButton() {
	function renderPaypalButton() {
		paypal
			.Buttons({
				createOrder: function (data, actions) {
					// Set up the transaction
					return actions.order.create({
						purchase_units: [
							{
								amount: {
									value: '0.01',
								},
							},
						],
					});
				},
			})
			.render('#paypal-button-container');
	}

	useEffect(() => {
		renderPaypalButton();
	}, []);

	return (
		<div>
			<div id="paypal-button-container"></div>
		</div>
	);
}

export default PaypalButton;
