import React from "react";

export const PostSubmit = ({newPostText, submitPost, updateNewPostText}) => {
    const newPostData = React.createRef();

    const postSubmit = (evt) => {
        evt.preventDefault();
        submitPost();
    }

    const onPostChange = () => {
        const text = newPostData.current.value;
        updateNewPostText(text);
    }
    return (

        <form>
            <textarea onChange={onPostChange} ref={newPostData} value={newPostText}/>
            <button onClick={postSubmit}  value={newPostText}>Send</button>
        </form>)
}

export default PostSubmit;
