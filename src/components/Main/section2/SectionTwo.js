import "./SectionTwo.scss";

function SectionTwo() {
  const openAndCloseDescp = function (e) {
    let close = "Свернуть";
    let open = " читать далее...";

    if (e.target.classList.contains("description")) {
      const descpOpen = e.target.parentNode
        .querySelector(".hiddenDescMarket")
        .classList.toggle("active");
      if (descpOpen) {
        e.target.textContent = close;
      } else {
        e.target.textContent = open;
      }
    }
  };

  return (
    <section className="sectionTwo flex_column " id="">
      <h2> О нас </h2>
      <div>
        <div className="descMarket">
          <p>
            Наш магазин Tecno Market был основан в 1977 году и занимается
            продажей мобильных телефонов , ноутбуков и планшетов собственного
            производства
          </p>
          <p className="hiddenDescMarket">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a,
          </p>
          <a
            className="description"
            onClick={(e) => {
              openAndCloseDescp(e);
            }}
          >
            читать далее
          </a>
        </div>

        <div className="descMarket">
          <p>
            Наше произдвоство занимает 1 место на рынке среди конкурентов.
            Производство Tehno Market лидирует в розничной продаже беджетных
            гаджетов
          </p>
          <p className="hiddenDescMarket">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a,
          </p>
          <a
            className="description"
            onClick={(e) => {
              openAndCloseDescp(e);
            }}
          >
            {" "}
            читать далее...
          </a>
        </div>

        <div className="descMarket">
          <p>
            Производитель Techno Market является поставщиков гаджетов уже с
            установленым мессенджером Maximus в бюджетные организации страны.
            Особенно в такие где требуется средства слежения за сотрудниками и
            их личной жизнью
          </p>
          <p className="hiddenDescMarket">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a,
          </p>
          <a
            className="description"
            onClick={(e) => {
              openAndCloseDescp(e);
            }}
          >
            {" "}
            читать далее...
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
