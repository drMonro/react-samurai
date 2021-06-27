import React from "react";
import {submitPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

export const PostSubmit = ({newPostText, dispatch}) => {
    const newPostData = React.createRef();

    const postSubmit = (evt) => {
        evt.preventDefault();
        dispatch(submitPostActionCreator())
    }

    const onPostChange = () => {
        const text = newPostData.current.value;

        dispatch(updateNewPostTextActionCreator(text))
    }
    return (

        <form>
            <textarea onChange={onPostChange} ref={newPostData} value={newPostText}/>
            <button onClick={postSubmit} value={newPostText}>Send</button>
        </form>)
}

export default PostSubmit;
