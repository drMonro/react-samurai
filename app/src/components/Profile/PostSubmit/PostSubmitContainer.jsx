import PostSubmit from "./PostSubmit";

const PostSubmitContainer = ({onPostChange, onPostSubmit, newPostText}) => {
    const submitPost = () => {
        onPostSubmit()
    }
    const updatePostText = (text) => {
        onPostChange(text);
    }
    return <PostSubmit updatePostText={updatePostText} submitPost={submitPost}
                       newPostText={newPostText}/>
}

export default PostSubmitContainer;
