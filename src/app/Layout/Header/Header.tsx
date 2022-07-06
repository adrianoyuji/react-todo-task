import React from "react";
import Navigator from "./Navigator";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__content container">
        <h1 className="header__title">Chore Tracker</h1>
        <Navigator />
      </div>
    </header>
  );
};

export default React.memo(Header);
