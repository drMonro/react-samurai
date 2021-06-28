import React from "react";
import {submitPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

export const PostSubmit = ({updatePostText, submitPost, newPostText}) => {
    const postSubmit = (evt) => {
        evt.preventDefault();
        submitPost();
    };

    const onPostChange = (evt) => {
        const text = evt.target.value;
        updatePostText(text);
    };

    return (
        <form>
            <textarea onChange={onPostChange} value={newPostText}/>
            <button onClick={postSubmit} value={newPostText}>Send</button>
        </form>);
}

export default PostSubmit;
