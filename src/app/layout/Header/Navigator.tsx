import { ChangeEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navigator = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    closeMenu();
  }, [location]);

  const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) =>
    setShowMenu(e.target.checked);

  const closeMenu = () => setShowMenu(false);

  return (
    <>
      {/* Desktop navigator */}
      <nav className="header__nav hide-mobile">
        <ul className="header__ul">
          <li>
            <Link to="/" className="header__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/chores" className="header__link">
              Chores
            </Link>
          </li>
          <li>
            <Link to="/about" className="header__link">
              About
            </Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu navigator */}
      <input
        checked={showMenu}
        onChange={handleChangeCheckbox}
        id="menu-toggle"
        type="checkbox"
      />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>
      <ul className="header__menu hide-desktop">
        <li>
          <Link to="/" className="header__link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/chores" className="header__link">
            Chores
          </Link>
        </li>
        <li>
          <Link to="/about" className="header__link">
            About
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navigator;
