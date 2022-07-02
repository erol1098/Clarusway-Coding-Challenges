import axios from "axios";
import { useEffect, useState } from "react";

const useHttp = () => {
  const [initialData, setInitialData] = useState([]);
  const [change, setChange] = useState(true);

  const url = "https://randomuser.me/api/";

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(url);
        setInitialData(res.data.results[0]);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [change]);

  return { initialData, setChange };
};

export default useHttp;
