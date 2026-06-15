import { useContext } from "react";
import { useParams } from "react-router";
import useProductDetailData from "../hooks/useProductDetailData";
import ProductDetail from "./ProductDetail";
import useCategoryDetailData from "../hooks/useCategoryDetailData";
import CartContext from "../context/CartContext";

function ProductDetailContainer() {
  const { productID } = useParams();
  const { addToCart } = useContext(CartContext);
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
