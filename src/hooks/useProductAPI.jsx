import { useState, useEffect } from "react";
import ProductAPI from "../js/productAPI";

/**
 * Bridge from React to the JS Products API.
 *
 * @param {object} props
 * @param {ProductAPI.Services} props.serviceType Enum value that specifies the wanted service
 * @param {object} props.params Flat object containig the parameters to send to the wanted service. MUST BE MEMOIZED BEFORE CALLING THIS FUNCTION!
 * @returns {Array}
 */
function useProductAPI({ serviceType, params }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    let finishedFetching = false;
    const service = ProductAPI.getService(serviceType);
    async function startFetching() {
      const items = await service(params);
      if (!finishedFetching) {
        setItems(items);
      }
    }
    startFetching();
    return () => {
      finishedFetching = true;
    };
  }, [serviceType, params]);
  return items;
}

export default useProductAPI;
