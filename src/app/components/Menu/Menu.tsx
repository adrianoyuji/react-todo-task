import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

interface Props {
  options: Option[];
  cardId: number;
}

interface Option {
  label: string;
  href?: string;
  action?: () => void;
}

const Menu = ({ options, cardId }: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const MenuId = useMemo(() => `card-${cardId}-options`, [cardId]);

  const handleToggleMenu = () => setShowMenu((prev) => !prev);

  return (
    <div className="menu__container">
      <div className="menu__box">
        <input
          id={MenuId}
          type="button"
          className="menu__btn"
          onClick={handleToggleMenu}
        ></input>
        <label htmlFor={MenuId} className="menu__options__container">
          <div className="menu__options__icon" />
        </label>
      </div>
      {showMenu && (
        <div className="menu__dropdown">
          {options.map((option) => {
            if (option.href) {
              return (
                <Link
                  to={option.href}
                  className="menu__dropdown__button"
                  key={option.label}
                >
                  {option.label}
                </Link>
              );
            }
            if (option.action) {
              return (
                <button
                  onClick={option.action}
                  className="menu__dropdown__button"
                  key={option.label}
                >
                  {option.label}
                </button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default Menu;
