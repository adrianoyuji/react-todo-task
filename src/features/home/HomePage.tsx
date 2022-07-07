import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const HomePage = () => {
  return (
    <section className="home__container container">
      <h2 className="home__title">Welcome to Chore Tracker!</h2>
      <p className="home__subtitle">
        Chore tracker is a platform that allows you to manage your household
        chores!
      </p>
      <Link to="/chores" className="home__chores__link">
        Get Started
      </Link>
    </section>
  );
};

export default React.memo(HomePage);
