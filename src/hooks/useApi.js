import { useEffect, useState } from 'react';

import axios from 'axios';

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
