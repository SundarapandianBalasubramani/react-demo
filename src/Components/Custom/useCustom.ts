import { useEffect, useState } from "react";
import { baseUrl } from "../../Constants";

export const useCustom = <T>({ url }: { url: string }) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  useEffect(() => {
    (async () => {
        try {
            const response = await fetch(`${baseUrl}/${url}`);
            const data = await response.json();
            setData(data);
            setLoading(false);
        }   catch (error) {
            setError((error as Error).message);
            setLoading(false);
        }   
        finally {
            setLoading(false);
        }
    })();
  }, [url]);
  return { data, loading, error };
};
