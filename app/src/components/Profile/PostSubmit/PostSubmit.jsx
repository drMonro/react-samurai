import React from "react";

export const PostSubmit = ({newPostText, dispatch}) => {
    const newPostData = React.createRef();

    const postSubmit = (evt) => {
        evt.preventDefault();
        dispatch({type: 'SUBMIT-POST'})
    }

    const onPostChange = () => {
        const text = newPostData.current.value;
        dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: text})
    }
    return (

        <form>
            <textarea onChange={onPostChange} ref={newPostData} value={newPostText}/>
            <button onClick={postSubmit}  value={newPostText}>Send</button>
        </form>)
}

export default PostSubmit;
