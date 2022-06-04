import React from 'react';
import Products from '../components/Products';
import InitialState from '../InitialState';

function Home() {
	return <Products products={InitialState.products} />;
}

export default Home;
