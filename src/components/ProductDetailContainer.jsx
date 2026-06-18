import { useParams } from "react-router";
import useCart from "../hooks/useCart";
import useCategoryDetailData from "../hooks/useCategoryDetailData";
import useProductDetailData from "../hooks/useProductDetailData";
import ProductDetail from "./ProductDetail";
import { useState } from "react";

function ProductDetailContainer() {
  const { productID } = useParams();
  const [product, productLoaded] = useProductDetailData(productID);
  const [count, setCount] = useState(1);
  const { addToCart, isInCart } = useCart();
  const productInCart = isInCart(product);
  const [category, categoryLoaded] = useCategoryDetailData(
    productLoaded ? product.categoryIDs[0].toString() : null,
  );
  const addToCartHandler = () => addToCart(product, count);

  return (
    <>
      {productLoaded && categoryLoaded ? (
        <ProductDetail
          product={product}
          category={category}
          handler={addToCartHandler}
          countState={[count, setCount]}
          isInCart={productInCart}
        />
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default ProductDetailContainer;
