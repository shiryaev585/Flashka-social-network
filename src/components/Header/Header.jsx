import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.scss";
import logo from "../../assets/icons/flashka_logo.svg";
import Button from "../common/Button/Button";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <NavLink to="/profile" className={classes.header__link}>
        <img src={logo} alt="img" height="80px" />
      </NavLink>
      <div className={classes.header__loginBlock}>
        {props.isAuth ? (
          <div>
            <NavLink to="/profile" className={classes.header__loginBlock_link}>
              Hello, {props.login}
            </NavLink><Button onClick={props.logout}><i class="fas fa-sign-out-alt"></i></Button>
          </div>
        ) : (
          <NavLink to="/login" className={classes.header__loginBlock_link}>
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
