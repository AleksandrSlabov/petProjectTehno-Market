import "./SectionThre.scss";

import { slide1, slide2, slide3, slide4 } from "../../image/sliderPhoto/Slider";

import { useState } from "react";

const slide = [slide1, slide2, slide3, slide4];

function SectionThre() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="sectionThre flex_column">
      <h3>Наше производство</h3>

      <div className="conteinerSlider">
        <button
          className="prevSlide"
          onClick={() => {
            const prevSlide = setActiveIndex(
              (prev) => (prev - 1 + slide.length) % slide.length,
            );
          }}
        >
          {" "}
          &lArr;
        </button>
        <div className="slider">
          {slide.map((src, index) => {
            return (
              <img
                key={index}
                className={`imageSlide ${index === activeIndex ? "active " : ""}`}
                src={src}
                alt={`slide ${index + 1}`}
              />
            );
          })}
        </div>
        <button
          className="nextSlide"
          onClick={() => {
            const nextSlide = setActiveIndex(
              (prev) => (prev + 1) % slide.length,
            );
          }}
        >
          &rArr;
        </button>
      </div>
    </section>
  );
}
export default SectionThre;
