import { Link } from "react-router-dom";

const Navigator = () => {
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
      <input id="menu-toggle" type="checkbox" />
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
