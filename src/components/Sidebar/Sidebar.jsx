import React from 'react';
import classes from './Sidebar.module.css';
import Friends from './Friends/Friends';

const Sidebar = (props) => {

    let friendsElements = props.state.sidebar.map( f => <Friends name={f.name} id={f.id} />);

    return (
        <div className={classes.wrp}>
            <div>
                {friendsElements}
            </div>
        </div>
    )
}

export default Sidebar;