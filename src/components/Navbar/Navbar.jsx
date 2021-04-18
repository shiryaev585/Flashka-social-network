import React from 'react';
import classes from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__ul}>
                <li><i className="far fa-user-circle"></i><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/profile">Profile</NavLink></li>
                <li><i className="fas fa-users"></i><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/users">Users</NavLink></li>
                <li><i className="far fa-comment-alt"></i><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/dialogs">Massages</NavLink></li>
                <li><i className="fas fa-globe"></i><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/news">News</NavLink></li>
                <li><i className="fas fa-music"></i><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/music">Music</NavLink></li>
                <li><i className="fas fa-cog"></i><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;