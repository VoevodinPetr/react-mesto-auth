import React, { useState } from "react";
import logo from "../image/логотип.png";

function Header({ children, isWrappable }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleOpenMenu() {
    setIsMenuOpened((state) => !state);
  }

  return (
    <header className={"header" + (isWrappable ? " header_wrappable" : "")}>
      <img src={logo} alt="Логотип" className="header__logo" />

      {isWrappable && (
        <button
          type="button"
          className={
            "header__button-menu" +
            (isMenuOpened ? " header__button-menu_opened" : "")
          }
          aria-label="Открыть меню"
          onClick={handleOpenMenu}
        ></button>
      )}

      {children && (
        <nav
          className={
            "header__menu" + (isMenuOpened ? " header__menu_opened" : "")
          }
        >
          <ul className="header__menu-list">
            {(children.length > 1 ? children : [children]).map((item, pos) => (
              <li className="header__menu-item" key={pos}>
                {item}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
