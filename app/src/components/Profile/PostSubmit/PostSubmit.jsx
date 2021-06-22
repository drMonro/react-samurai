import React from "react";

export const PostSubmit = () => {
    const newPostData = React.createRef();
    const postSubmit = () => {
        const text = newPostData.current.value;
        alert(text)
    }

    return (
        <form>
            <textarea ref={newPostData}/>
            <button onClick={postSubmit}>Send</button>
        </form>)
}

export default PostSubmit;
