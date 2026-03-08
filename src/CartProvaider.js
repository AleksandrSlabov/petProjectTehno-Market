import React, { createContext, useContext, useState, useEffect } from "react";
import productLocal from "./data/products.json";
const CartContext = createContext();

function CartProvaider({ children }) {
  const [products, setProducts] = useState([]); //--состояние массива  с обьектами товара
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [placeOrderOpen, setPlaceOrderOpen] = useState(false);

  useEffect(() => {
    async function data() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://faceprog.ru/reactcourseapi/products/all.php"
        );
        const dataArray = await response.json();

        setProducts(dataArray);
        setError(null);

        return dataArray;
      } catch (error) {
        setError("Ошибка загрузки товаров ");
        console.error("Ошибка загрузки Api", error);
        setProducts(productLocal);
      }
    }
    data();
  }, []);

  const addToCart = (product, quanity = 1) => {
    console.log(product);

    setCart((prevCart) => {
      const newItem = prevCart.find((item) => item.id === product.id);

      if (newItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quanity: item.quanity + quanity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quanity }];
      }
    });
  };

  const value = {
    placeOrderOpen,
    setPlaceOrderOpen,
    products,
    loading,
    error,
    addToCart,
    cart,
    setCart,
    isModalOpen,
    setIsModalOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

function useCart() {
  const context = useContext(CartContext);
  //   console.log(context);
  if (!context) {
    throw new Error("useCart должен использоваться внутри CartProvaider");
    // console.log(
    //   "Error ",
    //   "UseCart должен использоваться внутри карт провайдер "
    // );
  }
  return context;
}

export { CartProvaider, useCart };
