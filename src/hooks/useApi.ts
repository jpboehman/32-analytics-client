import { useEffect, useState } from 'react';

const useApi = (url) => {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ data, setData ] = useState(null);

	// function to fetch from the passed-in url parameter
	const fetchApi = () => {
		fetch(url).then((response) => response.json()).then((json) => {
			console.log(json);
			setData(json);
			setIsLoading(false);
		});
	};

	// useEffect to call fetchApi function
	useEffect(() => {
		fetchApi();
	}, []); // Using empty dependency array to ensure the fetchApi() call is only made once

	return { isLoading, data };
};
