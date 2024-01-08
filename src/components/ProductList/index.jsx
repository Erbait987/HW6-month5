import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/slices/productsSlice";
import { addToCart } from "../../redux/slices/cartSlice";
import "./producList.scss";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    import("../../data/products.json").then((data) => {
      dispatch(setProducts(data.default));
    });
  }, [dispatch]);

  const handleBuyClick = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <main>
      <h2>Продукты:</h2>

      <div className="products">
        {products.map((product) => (
          <div key={product._id}>
            <img src={product.picture} alt={product.name} />
            <p className="name">{product.name}</p>
            <p>{product.price}</p>
            <button onClick={() => handleBuyClick(product)}>Купить</button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ProductList;
