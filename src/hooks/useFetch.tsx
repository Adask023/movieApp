import { useEffect, useState } from "react";

export function useFetch<D>(url: string) {
  const [data, setData] = useState<D | null>(null);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setData(data))
      .catch((e) => console.log(e));
  }, []);

  return data;
}
