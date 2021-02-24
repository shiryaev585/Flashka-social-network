import React from 'react';

const Friends = (props) => {
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yQruEZozdBpH--2cCH9jQzkgVcEplyfOGg&usqp=CAU" alt="img" height="32px" />
            <p>{props.name}</p>
        </div>
    )
}

export default Friends;