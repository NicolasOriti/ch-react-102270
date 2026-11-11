import { useEffect, useState } from 'react';

export const useAsync = (asyncFn, arg) => {
  const [state, setState] = useState({ data: null, loading: true, error: null });

  useEffect(() => {
    let ignore = false;

    const load = async () => {
      try {
        const data = await asyncFn(arg);
        if (!ignore) setState({ data, loading: false, error: null });
      } catch (err) {
        if (!ignore) setState({ data: null, loading: false, error: err.message });
      }
    };

    load();

    return () => {
      ignore = true;
    };
  }, [asyncFn, arg]);

  return { ...state };
};
