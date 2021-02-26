import React from "react";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <header className={classes.header}>
      <a href="#" className={classes.header__link}  >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
          alt="img"
          height="40px"
        />
      </a>
    </header>
  );
};

export default Header;
