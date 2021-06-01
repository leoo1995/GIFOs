import React from "react";
import "./headerpage.scss";
import logoLight from "../../assets/logo-desktop.svg";
import logoDark from "../../assets/logo-mobile-modo-noct.svg";
const HeaderPage = ({ darkToggle, setDarkToggle }) => {
  return (
    <header className="header">
      <img src={darkToggle ? logoDark : logoLight} alt="gifos logo" />
      <button
        className={`button-dark-mode ${darkToggle && "dark"}`}
        onClick={() => setDarkToggle(!darkToggle)}
      >
        {!darkToggle ? "modo dark" : "modo ligth"}
      </button>
    </header>
  );
};

export default HeaderPage;
