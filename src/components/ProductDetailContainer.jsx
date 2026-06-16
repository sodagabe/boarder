import { useParams } from "react-router";
import useCart from "../hooks/useCart";
import useCategoryDetailData from "../hooks/useCategoryDetailData";
import useProductDetailData from "../hooks/useProductDetailData";
import ProductDetail from "./ProductDetail";

function ProductDetailContainer() {
  const { productID } = useParams();
  const { addToCart } = useCart();
  const [product, productLoaded] = useProductDetailData(productID);
  const [category, categoryLoaded] = useCategoryDetailData(
    productLoaded ? product.categoryIDs[0].toString() : null,
  );
  const addToCartHandler = () => addToCart(product);
  return (
    <>
      {productLoaded && categoryLoaded ? (
        <ProductDetail
          product={product}
          category={category}
          handler={addToCartHandler}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductDetailContainer;
