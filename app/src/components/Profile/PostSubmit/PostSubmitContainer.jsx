import PostSubmit from "./PostSubmit";
import {submitPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const PostSubmitContainer = ({store, newPostText}) => {
    const onPostSubmit = () => {
        store.dispatch(submitPostActionCreator())
    }

    const onPostChange = (text) => {
        store.dispatch(updateNewPostTextActionCreator(text))
    }
    return <PostSubmit updatePostText={onPostChange} submitPost={onPostSubmit}
                       newPostText={newPostText}/>
}

export default PostSubmitContainer;
