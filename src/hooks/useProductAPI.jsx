import { useState, useEffect } from "react";
import ProductAPI from "../js/productAPI";

/**
 * Bridge from React to the JS Products API.
 *
 * @param {Object} props
 * @param {Symbol} props.serviceType - ProductAPI.Services enum value that specifies the wanted service
 * @param {Object} props.params - Flat object containing the parameters to send to the wanted service. **MUST BE PRE-MEMOIZED!**
 * @returns {Product[]}
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
