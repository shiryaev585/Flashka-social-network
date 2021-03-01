import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <a href="#" className={classes.header__link}  >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
          alt="img"
          height="40px"
        />
      </a>
      <div className={classes.loginBlock}>
        { props.isAuth ? props.login : <NavLink to="/login" className={classes.loginBlock__link}>Login</NavLink> }
      </div>
    </header>
  );
};

export default Header;
