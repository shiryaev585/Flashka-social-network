import React from 'react';
import classes from './Preloder.module.scss';
import preloader from "../../../assets/icons/spinning-circles.svg";

const Preloader = () => {
    return <div  className={classes.imgWrapper}>
    <img src={preloader} alt="preloader" />
  </div>
};

export default Preloader;