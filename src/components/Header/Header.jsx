import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import logo from "../../assets/icons/flashka_logo.svg"

const Header = (props) => {
  return (
    <header className={classes.header}>
      <NavLink to="/profile" className={classes.header__link}  >
        <img
          src={logo}
          alt="img"
          height="80px"
        />
      </NavLink>
      <div className={classes.header__loginBlock}>
        { props.isAuth 
          ? <NavLink to="/profile" className={classes.header__loginBlock_link}>Hello, {props.login}</NavLink>  
          : <NavLink to="/login" className={classes.header__loginBlock_link}>Login</NavLink> }
      </div>
    </header>
  );
};

export default Header;
