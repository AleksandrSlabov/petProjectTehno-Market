import SectionOne from "./section1/Section";
import SectionTwo from "./section2/SectionTwo";
import SectionThre from "./section3/SectionThre";

function Main({ products }) {
  return (
    <main>
      <SectionOne products={products} />
      <SectionTwo />
      <SectionThre />
    </main>
  );
}

export default Main;
