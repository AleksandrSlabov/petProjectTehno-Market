import { useCart } from "../../../CartProvaider";
import useOperationModalCart from "./useOperationModalCart";
import logo from "../../image/logo192.png";

import "./ModalCart.scss";

function ModalCart() {
  const { cart, isModalOpen, setIsModalOpen, setPlaceOrderOpen } = useCart();

  const {
    sum,
    discount,
    sumResult,
    amountProduct,
    quanitiButtonPlusAndMinus,
    deletedProd,
    closeModalCart,
  } = useOperationModalCart();
  if (!isModalOpen) {
    return null;
  }

  return (
    <>
      <div
        className="overlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeModalCart(setIsModalOpen);
          }
        }}
      >
        <div className="modalCart flex_column">
          <section className="modalCartSectionHeder">
            <div className="flex_derection_spacebwrween ">
              <h2>Ваша корзина </h2>

              <p>
                <span>{amountProduct}</span> Товаров
              </p>
            </div>
            <div className="conteiner_btn_Close_And_res_sum flex_center_space ">
              <button
                type="button"
                onClick={() => {
                  closeModalCart(setIsModalOpen);
                }}
              >
                &#10060;
              </button>

              <p>
                Итого:{` `} <span>{sum}</span>
              </p>
            </div>
          </section>
          <div className="modalCartContent">
            <section className="modalCartSectionOne flex_column">
              {cart.map((product) => {
                return (
                  <article className="articele" key={product.id}>
                    <div className="conteiner_title_andLogo_product">
                      <img src={logo}></img>
                      <h3>{product.title} </h3>
                    </div>
                    <div className="conteiner_quaniti_product flex_derection_spacebwrween">
                      <div>
                        <input
                          type="number"
                          value={product.quanity}
                          readOnly
                        ></input>
                        <div className="conteiner_button_quaniti flex_derection_spacebwrween">
                          <button
                            onClick={() =>
                              quanitiButtonPlusAndMinus(product.id, "+")
                            }
                          >
                            &#8657;
                          </button>
                          <button
                            onClick={() =>
                              quanitiButtonPlusAndMinus(product.id, "-")
                            }
                          >
                            &#8659;
                          </button>
                        </div>
                      </div>

                      <span>{product.price} dollar</span>
                      <button
                        className="del_Product_cart"
                        onClick={(e) => {
                          deletedProd(e, product.id);
                        }}
                      >
                        &#10060;
                      </button>
                    </div>
                  </article>
                );
              })}
            </section>
          </div>
          <section className="modalCartSectionTwoo">
            <div>
              <h3>Сумма </h3>
              <span>{sum}</span>

              <h4>скидка</h4>
              <span> {discount}</span>
            </div>
            <div>
              <h4>Итого</h4>
              {sumResult}
            </div>
          </section>

          <section className="modalCartSectionFooter">
            <div className="flex_column">
              <p>
                <span>{amountProduct}</span> товаров
              </p>
              <button
                className="button_global"
                onClick={() => {
                  closeModalCart(setIsModalOpen);
                }}
              >
                Продолжить покупки{" "}
              </button>
            </div>
            <div className="flex_column">
              <p>{sumResult}</p>
              <button
                className="button_global"
                onClick={() => {
                  if (cart.length > 0) {
                    setPlaceOrderOpen(true);
                    closeModalCart(setIsModalOpen);
                  }
                }}
              >
                Оформить заказ{" "}
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ModalCart;
