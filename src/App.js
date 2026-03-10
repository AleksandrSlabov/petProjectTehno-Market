import Head from "./components/Header/Header";
import Main from "./components/Main/Main";
import ModalCart from "./components/Modal/ModalCart/ModalCart";
import ModalPlaceOrder from "./components/Modal/ModalPlaceOrder/ModalPlaceOrder";
import Footer from "./components/footer/Footer";

function App(props) {
  return (
    <>
      <ModalPlaceOrder />
      <ModalCart />
      <Head title="TechnoMarket" />
      <Main />
      <Footer />
    </>
  );
}

export default App;
