import React from 'react';
import classes from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} key={p.id} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.postsWrapper}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea 
                        onChange={onPostChange}
                        className={classes.textarea} 
                        ref={newPostElement} 
                        value={props.newPostText}
                    />
                </div>
                <div>
                    <button 
                        className={classes.btn}
                        onClick={onAddPost}>
                            Add post
                    </button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;