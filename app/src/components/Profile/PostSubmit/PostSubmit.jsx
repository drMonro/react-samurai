import React from "react";

export const PostSubmit = ({submitPost}) => {
    const newPostData = React.createRef();

    const postSubmit = (evt) => {
        evt.preventDefault();
        const text = newPostData.current.value;
        submitPost(text);
    }

    return (
        <form>
            <textarea ref={newPostData}/>
            <button onClick={postSubmit}>Send</button>
        </form>)
}

export default PostSubmit;
