import { useState, useEffect } from "react";
import ProductAPI from "../js/productAPI";

function useProductAPI({ serviceType, params = {} }) {
  const [items, setItems] = useState([]);
  const { categoryID } = params;
  useEffect(() => {
    let finishedFetching = false;
    const service = ProductAPI.getService(serviceType, categoryID);
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
  }, [serviceType, categoryID]);
  return items;
}

export default useProductAPI;
