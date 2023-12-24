import { useEffect, useState } from "react";
import axios from "axios";

export default function useApi(url) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    async function getCatagories() {
      try {
        const resp = await axios.get(url);
        setLoading("false");
        setResponse(resp.data);
      } catch (err) {
        setError(err);
        setLoading("false");
      }
    }
    getCatagories();
  }, [url]);

  return {
    response,
    error,
    loading,
  };
}
