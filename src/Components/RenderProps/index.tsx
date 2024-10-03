import { useEffect, useState } from "react";
import { baseUrl } from "../../Constants";

export interface IRenderProps<T> {
    render: (data: T[], loading: boolean, error?: string) => React.ReactNode;
    url: string;
  }

  export const RenderProps = <T,>({ render, url }: IRenderProps<T>) => {
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
        } catch (error) {
          setError((error as Error).message);
          setLoading(false);
        } finally {
          setLoading(false);
        }
      })();
    }, [url]);
    return render(data, loading, error);
  }