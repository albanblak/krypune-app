import { useEffect, useState } from "react";
import axios from "axios";
import AuthService from "../services/auth.service";

const useFetch = (url) => {
  const [loading, setLoading] = useState();
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading("Loading..");
    setData(null);
    setError(null);
    const source = axios.CancelToken.source();
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${AuthService.getCurrentUser()}`,
        },
      })
      .then((res) => {
        //console.log(res.data)
        setLoading(false);
        if (res.data.message === "success") {
          res.data && setData(res.data);
        }
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
    return () => {
      source.cancel();
    };
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
