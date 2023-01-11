import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  useEffect(() => {
    const getFetch = async () => {
      setState((prev) => ({ ...prev, isLoading: true }));
      try {
        const response = await fetch(url);
        if (!response.ok)
          throw { status: response.status, statusText: response.statusText };
        const data = await response.json();
        setState((prev) => ({
          ...prev,
          data,
          isLoading: false,
          hasError: null,
        }));
      } catch (err) {
	setState(prev => (
	  {
	    ...prev,
	    hasError: err
	  }
	))
      }
    };

    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
