import React, { useEffect, useState } from "react";
import { baseUrl } from "../../App";
export interface ComponentProps<T> {
  data: T[];
  loading: boolean;
  error?: string;
}

export const HOC = <T,>({
  Component,
  url,
}: {
  url: string;
  Component: React.FC<ComponentProps<T>>;
}) => {
  const [details, setDetails] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/${url}`);
        const json = await response.json();
        setDetails(json);
      } catch (error) {
        console.log(error);
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Component data={details} loading={loading} error={error} />;
};
