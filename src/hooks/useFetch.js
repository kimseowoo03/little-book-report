import { useCallback, useState } from "react";

const useFetch = () => {
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, ReviewData) => {
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig ? requestConfig.method : "GET",
        headers: requestConfig ? requestConfig.headers : {},
        body: requestConfig ? JSON.stringify(requestConfig.body) : null,
      });
      const data = await response.json();
      ReviewData(data);
    } catch (error) {
      const statusCode = error.response.status;
      const statusText = error.response.statusText;
      console.log(` GET ERR >> ${statusCode} / ${statusText}`);
    }
  }, []);

  return {
    error,
    sendRequest,
  };
};

export default useFetch;
