import { useEffect, useState } from 'react';

import axios from 'axios';

const useApi = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  // Function called to get the response from the api and return it as JSON

  // From the custom useApi hook, utilize a useEffect hook to call the fetchApi() function when the useApi hook is called
  useEffect(() => {
    const fetchApi = () => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setIsLoading(false);
        })
        .catch((error) => console.error(JSON.stringify(error)));
    };

    fetchApi();
  }, []);

  return { isLoading, data };
};

const useApi = (apiParams) => {
  const [response, setResponse] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Advantage of promises
  const fetchData = async (params) => {
    setIsLoading(true);
    try {
      const { data } = await axios.request(params);
      setResponse(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(apiParams);
  }, []);

  return { response, isLoading, isError };
}

export default useApi;
