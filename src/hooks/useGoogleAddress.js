import { useState, useEffect } from 'react';

const useGoogleAddress = address => {
  const [location, setLocation] = useState([]);
	const API = `http://api.positionstack.com/v1/forward?access_key=3671dc95b53cbc47b97a8493f660a6d0&query=${address}`;

  useEffect(() => {
		fetch(API)
			.then((response) => response.json())
			.then((data) => setLocation(data.data[0]));
	}, []);

  return location;
};

export default useGoogleAddress;