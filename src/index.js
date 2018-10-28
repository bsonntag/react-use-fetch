import { useMemo } from 'react';
import usePromise from 'react-use-promise';

export default function useFetch(input, init) {
  const [response, error] = usePromise(useMemo(
    () => fetch(input, init),
    [input, init]
  ));

  return {
    error,
    isLoading: !response && !error,
    response
  };
}

export function useJsonResponse(response) {
  return usePromise(useMemo(() => {
    return response ? response.json() : null;
  }, [response]));
}
