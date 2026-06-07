import { useState, useEffect } from "react";
import ProductAPI from "../js/productAPI";

function useProductAPI(serviceType) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let finishedFetching = false;
    const service = ProductAPI.getService(serviceType);
    async function startFetching() {
      const items = await service();
      if (!finishedFetching) {
        setItems(items);
      }
    }
    startFetching();
    return () => {
      finishedFetching = true;
    };
  }, [serviceType]);
  return items;
}

export default useProductAPI;
