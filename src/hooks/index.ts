import { useEffect, useState } from "react";
import { baseUrl } from "../App";

export const useCustom = <T>({ url }: { url: string }) => {
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
  }, [url]);

  return { details, loading, error };
};
