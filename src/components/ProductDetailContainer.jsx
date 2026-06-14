import { useParams } from "react-router";
import useProductDetailData from "../hooks/useProductDetailData";
import ProductDetail from "./ProductDetail";
import useCategoryDetailData from "../hooks/useCategoryDetailData";

function ProductDetailContainer() {
  const { productID } = useParams();
  const [product, productLoaded] = useProductDetailData(productID);
  const [category, categoryLoaded] = useCategoryDetailData(
    productLoaded ? product.categoryIDs[0].toString() : null,
  );
  return (
    <>
      {productLoaded && categoryLoaded ? (
        <ProductDetail product={product} category={category} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductDetailContainer;
