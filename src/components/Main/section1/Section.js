import logo from "../../image/setingLogo.svg";
import "./SectionOne.scss";

import { useCart } from "../../../CartProvaider";

function SectionOne() {
  const { products, addToCart, cart } = useCart();

  return (
    <section className="SectionOne">
      {products.map((product) => {
        return (
          <article className="articleCard" key={product.id}>
            <div className="flex_derection_spacebwrween ">
              <img className="articleLogo" src={logo} alt="NO_LOGO"></img>
              <h3> {product.title}</h3>
            </div>

            <div className="flex_derection_spacebwrween ">
              <p>{product.price}рублей</p>
              <p>Осталось {product.rest} шт</p>
            </div>
            <button
              className="button_global"
              onClick={() => {
                addToCart(product);
              }}
            >
              Купить{" "}
            </button>
            <button className="button_global">Избранное</button>
          </article>
        );
      })}
    </section>
  );
}

export default SectionOne;
