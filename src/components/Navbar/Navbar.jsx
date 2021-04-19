import React from 'react';
import classes from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <ul className={classes.nav__ul}>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/profile"><i className="far fa-user-circle"></i>Profile</NavLink></li>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/users"><i className="fas fa-users"></i>Users</NavLink></li>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/dialogs"><i className="far fa-comment-alt"></i>Massages</NavLink></li>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/news"><i className="fas fa-globe"></i>News</NavLink></li>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/music"><i className="fas fa-music"></i>Music</NavLink></li>
                <li><NavLink className={classes.nav__item} activeClassName={classes.nav__active} to="/settings"><i className="fas fa-cog"></i>Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;