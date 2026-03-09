import { useEffect, useState } from "react";
import { useCart } from "../../CartProvaider";
import useHeader from "./useHeader";

import logo from "../image/logoTehNoMarket.jpeg";
import "./Header.scss";

function Head(props) {
  const { isModalOpen, setIsModalOpen, placeOrderOpen, setPlaceOrderOpen } =
    useCart();
  const { header, setHeader, scroll, setScroll, ulBurger, setUlburger } =
    useHeader();

  useEffect(() => {
    setHeader(!(isModalOpen || placeOrderOpen));
    if (isModalOpen || placeOrderOpen) {
      setUlburger(false);
    }
  }, [placeOrderOpen, isModalOpen, setHeader, setUlburger]);

  return (
    <header
      className={`${scroll ? "scrolled" : ""} 
        ${!header ? "hidden" : ""}`}
    >
      <div className="header  flex_center_space ">
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
              if (ulBurger) {
                setUlburger(false);
              } else {
                setScroll(false);
                setUlburger(true);
              }
            }}
          >
            {" "}
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul
            className={` ul_burger flex_column  ${ulBurger ? "active  " : ""}`}
          >
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
      </div>
    </header>
  );
}

export default Head;
