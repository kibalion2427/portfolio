import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
        setData(error);
      }
      setIsLoading(false);
    };
    fetchData();
    // console
  }, []);
  console.log("use-http", data);
  return [data, isLoading, isError];
};
