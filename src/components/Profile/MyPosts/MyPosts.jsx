import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "../../common/Button/Button"

const MyPosts = React.memo((props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} key={p.id} likesCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={classes.postsWrapper}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
});

const maxLength500 = maxLengthCreator(500);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newPostText"
          validate={[required, maxLength500]}
          placeholder="Post something..."
        />
      </div>
      <div>
        <Button>Add post</Button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "profileAddPostForm" })(AddNewPostForm);

export default MyPosts;
