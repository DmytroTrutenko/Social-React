import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Posts/Post';
import {Field, reduxForm} from "redux-form";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/Forms/forms";

const maxLength10 = maxLength(10);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.post_footer}>
            <Field
                placeholder='Enter your message'
                className={classes.textarea}
                component={Textarea}
                name={'newPostBody'}
                validate ={[required, maxLength10]}
            />
            <button>
                <FontAwesomeIcon
                    className={classes.icons}
                    icon={faPaperPlane}
                />
            </button>
        </form>
    )
};

const AddPostFormRedux = reduxForm({form: 'AddPost'})(AddPostForm);

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post
        src={p.src}
        message={p.message}
        likeCounts={p.likeCounts}
        key={p.id}
    />);

    let onAddPost = (value) => {
        props.addPost(value.newPostBody);
    };

    return (
        <div className={classes.myPosts}>
            <h3>My post</h3>
            <AddPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;