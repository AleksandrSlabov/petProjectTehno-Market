import { useCart } from "../../../CartProvaider";
import "../ModalCart/ModalCart.scss";
import "../ModalPlaceOrder/ModalPlaceOrder.scss";

import logo from "../../image/logo192.png";
import useOperationModalCart from "../ModalCart/useOperationModalCart";
import useOrderForm from "./useOrderForm";

function ModalPlaceOrder() {
  //состояние корзины
  const { cart, setCart, placeOrderOpen, setPlaceOrderOpen } = useCart();
  //управление модальным окном формы и корзины
  const {
    sum,
    discount,
    sumResult,
    amountProduct,
    quanitiButtonPlusAndMinus,
    deletedProd,
    closeModalCart,
  } = useOperationModalCart();
  //управление формой и отправкой заявки на сервер

  const {
    tel,
    setTel,
    orderForm,
    user,
    setUser,
    email,
    setEmail,
    comment,
    setComment,
    isOrderSubmited,
    setIsOrderSubmited,
  } = useOrderForm();

  //проверка состояния , если у нас состояние false ты мы не загружаем его
  if (!placeOrderOpen) {
    return null;
  }
  if (cart.length === 0) {
    setPlaceOrderOpen(false);
  }

  return (
    <>
      <div
        className="overlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeModalCart(setPlaceOrderOpen);
          }
        }}
      >
        <div className="modalPlaceOrder flex_column">
          <button
            className="btn_close"
            onClick={() => {
              closeModalCart(setPlaceOrderOpen);
            }}
          >
            {" "}
            &#10060;
          </button>
          <section className="secHeader">
            <h3 className="titleOrder">Оформление Заказа!</h3>
          </section>

          <section className="secMain flex_column">
            <section className="placeOrder flex_column">
              <div className="conteiner_amountProd_sumProd flex_center_space ">
                <p>
                  {" "}
                  <span>{amountProduct}</span> товаров
                </p>

                <p>
                  СУММА <span>{sumResult}</span>
                </p>
              </div>
              <div className="productOrder flex_column ">
                {cart.map((product) => {
                  return (
                    <article
                      className="articele flex_center_space "
                      key={product.id}
                    >
                      <div className="conteiner_finishLogo_Title">
                        <img src={logo}></img>
                        <p>{product.title}</p>
                      </div>
                      <div className="conteiner_finish_prod">
                        <p>
                          товаров выбрано <span>{product.quanity}</span>
                        </p>
                        <p>
                          Итого <span>{product.price * product.quanity}</span>
                        </p>
                      </div>
                      <div className="conteiner_btnDel_btnEdit flex_column ">
                        <button
                          onClick={(e) => {
                            deletedProd(e, product.id);
                          }}
                        >
                          {" "}
                          &#10060;
                        </button>
                        <button>&#9997; </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
            {!isOrderSubmited ? (
              <form
                onSubmit={(e) => {
                  orderForm(e);
                }}
                name="placeOrder"
                className="forma flex_column "
              >
                <input
                  maxLength={20}
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  name="userName"
                  required
                  type="name"
                  placeholder="Имя"
                ></input>
                <input
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                  name="userTel"
                  type="tel"
                  placeholder="мобильный телефон"
                  required
                ></input>
                <input
                  maxLength={30}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name="userEmail"
                  type="email"
                  placeholder="email"
                  required
                ></input>
                <textarea
                  maxLength={1000}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  name="userComment"
                  placeholder="Введите коментарий "
                ></textarea>
                <button className="button_global">Оформить </button>
              </form>
            ) : (
              <div className="conteinerOrderTrue">
                <h3>Спасибо за заказ !</h3>
                <button
                  onClick={() => setIsOrderSubmited(false)}
                  className="button_global"
                >
                  Вернуться !
                </button>
              </div>
            )}
          </section>
          <section className="secFooter"></section>
        </div>
      </div>
    </>
  );
}

export default ModalPlaceOrder;
