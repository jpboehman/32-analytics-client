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

export default useApi;
