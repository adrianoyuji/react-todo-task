import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
const NotFoundPage = () => {
  return (
    <section className="notfound container">
      <h2 className="notfound__title">Oops! This page does not exist.</h2>
      <nav className="notfound__nav">
        <p>Please check our other pages</p>
        <ul className="notfound__ul">
          <li>
            <Link to="/" className="notfound__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/chores" className="notfound__link">
              Chores
            </Link>
          </li>
          <li>
            <Link to="/about" className="notfound__link">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default React.memo(NotFoundPage);
