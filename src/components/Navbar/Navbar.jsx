import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
// import Sidebar from '../Sidebar/Sidebar';

const Navbar = (props) => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink className={classes.item} activeClassName={classes.active} to="/profile">Profile</NavLink></li>
                <li><NavLink className={classes.item} activeClassName={classes.active} to="/dialogs">Massages</NavLink></li>
                <li><NavLink className={classes.item} activeClassName={classes.active} to="/news">News</NavLink></li>
                <li><NavLink className={classes.item} activeClassName={classes.active} to="/music">Music</NavLink></li>
                <li><NavLink className={classes.item} activeClassName={classes.active} to="/settings">Settings</NavLink></li>
            </ul>
            {/* <Sidebar state={props.state.sidebar} /> */}
        </nav>
    )
}

export default Navbar;