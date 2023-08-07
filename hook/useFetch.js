import { useState, useEffect } from "react";
import axios from "axios";

import { EXPO_PUBLIC_RAPID_API_KEY } from "@env";

export const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(query);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": EXPO_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refetch };
};
