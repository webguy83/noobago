import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  const getData = useCallback(
    async function () {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    },
    [url]
  );

  useEffect(() => {
    getData();
  }, [getData]);

  return { data };
};
