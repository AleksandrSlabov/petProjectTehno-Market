import { useCart } from "../../../CartProvaider";

const useOperationModalCart = () => {
  const { cart, setCart, setIsModalOpen } = useCart();
  //сумма товаров
  const sum = () => {
    return cart.reduce((acc, product) => {
      return acc + product.price * product.quanity;
    }, 0);
  };
  //скидка
  const discount = (n) => {
    return (sum() * n) / 100;
  };
  //сумма со скидкой
  const sumResult = () => {
    return sum() - discount(5);
  };
  //колличество товаров
  const amountProduct = () => {
    return cart.reduce((acc, product) => {
      return acc + product.quanity;
    }, 0);
  };
  //увелечение и уменьшение товаров в корзине
  const quanitiButtonPlusAndMinus = (productID, operation) => {
    setCart((prevState) => {
      return prevState.map((prev) => {
        let newQuanity;
        if (prev.id === productID) {
          if (operation === "+") {
            newQuanity = prev.quanity + 1;
          } else if (operation === "-") {
            newQuanity = prev.quanity - 1;
          }

          if (newQuanity >= 1 && newQuanity <= prev.rest) {
            return { ...prev, quanity: newQuanity };
          } else {
          
            return prev;
          }
        }
        return prev;
      });
    });
  };
  //удаление товаров из корзины
  const deletedProd = (e, productID) => {
    const article = e.currentTarget.closest("article");
    if (article) {
      article.classList.add("active");
    }
    setTimeout(() => {
      setCart((prevState) => {
       
        return prevState.filter((item) => {
     
          return item.id !== productID;
        });
      });
    }, 1200);
  };
  //закрытие модального окна
  const closeModalCart = (setState) => {
    setState(false);

  };

  return {
    sum: sum(),
    discount: discount(5),
    sumResult: sumResult(),
    amountProduct: amountProduct(),
    quanitiButtonPlusAndMinus,
    deletedProd,
    closeModalCart,
  };
};
export default useOperationModalCart;
