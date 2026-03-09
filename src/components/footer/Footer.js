import "./Footer.scss";

import { useState } from "react";

import logo from "../image/logoTehNoMarket.jpeg";
import { email, gitHub, telegram } from "../image/socialIcon/SocialLink";
function Footer() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userComment, setUserComment] = useState("");

  const [formFooter, setFormFooter] = useState(true);

  return (
    <footer>
      <div className="conteiner_footer">
        <div className="conteinerFooterLogo">
          <img src={logo} alt="logotip"></img>
        </div>
        <div className="conteinerLinksFooter">
          <section className="links">
            <ul className="flex_derection_spacebwrween">
              <li className="flex_derection_spacebwrween">
                <label>Мой Telegram</label>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://t.me/sancheszzzzz?ysclid=mlmiybgsjt861205885"
                >
                  <img src={telegram} alt="telegram" />
                </a>
              </li>
              <li className="flex_derection_spacebwrween">
                <label>Мой GitHub</label>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://github.com/AleksandrSlabov"
                >
                  <img src={gitHub} alt="gitHub" />
                </a>
              </li>
              <li className="flex_derection_spacebwrween">
                <label>Моя почта</label>
                <a>
                  <img src={email} alt="почта " />
                </a>
              </li>
            </ul>
          </section>
          <section className="company">
            <ul className="flex_derection_spacebwrween">
              <li>
                <a href="">Наши товары </a>
              </li>
              <li>
                <a href="">О нас </a>
              </li>
              <li>
                <a href="">Наше производство </a>
              </li>
            </ul>
          </section>
        </div>
        {formFooter ? (
          <form className="forma_footer flex_derection_spacebwrween">
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              maxLength={20}
              name="userName"
              required
              type="name"
              placeholder="Ваше Имя"
            ></input>
            <input
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              maxLength={30}
              name="userEmail"
              type="email"
              placeholder="Email"
              required
            ></input>
            <textarea
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              maxLength={1000}
              name="userComment"
              placeholder="Введите коментарий"
              required
            ></textarea>

            <button
              onClick={async (e) => {
                e.preventDefault();

                if (
                  userName.length > 20 ||
                  userEmail.length > 50 ||
                  userComment.length > 1000
                ) {
                  return null;
                }
                if (!/^\S+@\S+\.\S+$/.test(userEmail)) {
                  alert("Введите  Email");
                }

                //текущая дата
                const date = new Date();

                const message = ` Сообщение  от  ${date.toLocaleDateString("ru", { day: "numeric", month: "long", year: "numeric" })}
              Имя : ${userName};
              Email:${userEmail};
              Коментарий: ${userComment || null}`;

                try {
                  const response = await fetch(
                    `https://telegram-secret.vercel.app/api/send `,
                    {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ message }),
                    },
                  );
                  if (!response.ok) {
                    throw new Error("Ошибка отправки ");
                  }
                  setFormFooter(false);
                } catch (error) {
                  console.error(error);
                  alert("Ты слишом много отправил(а) !");
                }
              }}
              className="button_global"
            >
              Отправить!
            </button>
          </form>
        ) : (
          <div className="conteinermodalForm">
            <h3>Спасибо за обратную связь!</h3>
            <button
              onClick={() => setFormFooter(true)}
              className="button_global"
            >
              Вернуться!
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}
export default Footer;
