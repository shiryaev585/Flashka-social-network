import React from 'react';
import classes from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';
// import Sidebar from '../Sidebar/Sidebar';

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__ul}>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/profile">Profile</NavLink></li>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/users">Users</NavLink></li>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/dialogs">Massages</NavLink></li>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/news">News</NavLink></li>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/music">Music</NavLink></li>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/settings">Settings</NavLink></li>
            </ul>
            {/* <Sidebar state={props.state.sidebar} /> */}
        </nav>
    )
}

export default Navbar;