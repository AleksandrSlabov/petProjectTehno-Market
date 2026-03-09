import { useEffect, useState } from "react";

function useHeader() {
  const [scroll, setScroll] = useState(false);
  const [ulBurger, setUlburger] = useState(false);
  const [header, setHeader] = useState(true);

  useEffect(() => {
    const scroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScroll(true);
        setUlburger(false);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", scroll);
  }, []);

  return {
    header: header,
    setHeader: setHeader,
    scroll: scroll,
    setScroll: setScroll,
    ulBurger: ulBurger,
    setUlburger: setUlburger,
  };
}

export default useHeader;
