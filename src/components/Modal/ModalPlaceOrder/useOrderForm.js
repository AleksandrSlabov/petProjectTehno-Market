import { useCart } from "../../../CartProvaider";
import useOperationModalCart from "../ModalCart/useOperationModalCart";
import { useState } from "react";

const useOrderForm = () => {
  const { cart, setCart } = useCart();
  const { sumResult, discount } = useOperationModalCart();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [tel, setTel] = useState("");

  const [isOrderSubmited, setIsOrderSubmited] = useState(false);

  const isOrder = Math.random().toString(36).substring(2);

  async function orderForm(e) {
    e.preventDefault();

    //Корзина для заявки
    const userCartOrder = cart.map((item) => {
      return `
      ----------------------------------
      Название товара ${item.title}
      Артикул товара ${item.id}
      Колличество товара: ${item.quanity}
      Стоимость одного товара ${item.price}
      Стоимость всех товаров: ${item.quanity * item.price};`;
    });

    //текущая дата
    const date = new Date();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Введите  Email");
      return null;
    }
    const message = `
    Заказ № : ${isOrder}  от  ${date.toLocaleDateString("ru", { day: "numeric", month: "long", year: "numeric" })}

    Имя : ${user}

    Email: ${email}

    Телефон : ${tel}

    Коментарий: ${comment || null}

    список товаров : ${userCartOrder}

    Сумма всех товаров: ${sumResult}

    Скидка: ${discount};`;

    try {
      const response = await fetch(
        `https://telegram-secret.vercel.app/api/send `,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        },
      );

      if (!response.ok) {
        throw new Error("Ошибка отправки ");
      }
      setTimeout(() => {
        setCart([]);
      }, 3000);
      setIsOrderSubmited(true);
    } catch (error) {
      console.error(error);
      alert("Приносим свои извенения , заявки временно не принимаются !");
    }
  }

  return {
    isOrderSubmited: isOrderSubmited,
    setIsOrderSubmited: setIsOrderSubmited,
    orderForm: orderForm,
    tel: tel,
    setTel: setTel,
    user: user,
    email: email,
    comment: comment,
    setUser: setUser,
    setEmail: setEmail,
    setComment: setComment,
  };
};

export default useOrderForm;
