import logo from "../image/logoTehNoMarket.jpeg";
import "./Header.scss";

import { useCart } from "../../CartProvaider";

function Head(props) {
  const { setIsModalOpen } = useCart();
  return (
    <header className="header  flex_center_space ">
      <div className="conteiner_heder__logo_and__title">
        <h2 className="header_title_website">{props.title}</h2>
        <img className="header_logo" src={logo} alt="Java Script "></img>
      </div>
      <ul className="  conteinerHeader">
        <li>
          <a>Наши товары </a>
        </li>
        <li>
          <a>О нас </a>
        </li>
        <li>
          <a>Наше Производство</a>
        </li>
        <li>
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            type="button"
          >
            &#128722;
          </button>
        </li>
      </ul>
      <div className="conteiner_Burger">
        <button
          className="flex_derection_spacebwrween btnBurger "
          onClick={(e) => {
            if (e.target.closest(".btnBurger")) {
              document.querySelector(".ul_burger").classList.toggle("active");
            }
          }}
        >
          {" "}
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className="ul_burger flex_column">
          <li>
            <a>Наши товары </a>
          </li>
          <li>
            <a>О нас </a>
          </li>
          <li>
            <a>Наше Производство</a>
          </li>
          <li>
            <button
              onClick={() => {
                setIsModalOpen(true);
              }}
              type="button"
            >
              &#128722;
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Head;
