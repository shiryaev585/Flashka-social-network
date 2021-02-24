import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    
    return (
            <div className={classes.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yQruEZozdBpH--2cCH9jQzkgVcEplyfOGg&usqp=CAU" alt="img" />
                {props.message}
                <div className={classes.likesWrp}>
                    <button className={classes.btn}>Лайкос</button>
                    {props.likesCount}
                </div>
            </div>
    )
}

export default Post;