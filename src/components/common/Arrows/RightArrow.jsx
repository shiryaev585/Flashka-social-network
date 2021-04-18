import React from 'react'
import classes from './Arrows.module.scss'

const RightArrow = (props) => {
  return (
    <button className={classes.arrowBtn}>
      <i class="fas fa-angle-double-right"></i>
    </button>
  )
}

export default RightArrow
