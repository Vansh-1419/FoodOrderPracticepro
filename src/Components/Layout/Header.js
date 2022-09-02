import React from "react";
import mealsImage from "../../assets/image.jpg";
import classes from "./Header.module.css";
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <button className={classes.button}>
          <span>🛒</span>Cart
        </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} />
      </div>
    </React.Fragment>
  );
};
export default Header;
