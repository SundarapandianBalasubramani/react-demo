import { useEffect, useState } from "react";
import { baseUrl } from "../../Constants";

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
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${baseUrl}/${url}`);
        const users = await response.json();
        setData(users);
      } catch (e) {
        setError((e as unknown as Error).message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return <Component data={data} loading={loading} error={error} />;
};
