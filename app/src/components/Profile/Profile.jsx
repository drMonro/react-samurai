import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostSubmit from "./PostSubmit/PostSubmit";

export const Profile = ({state, submitPost, updateNewPostText}) => {
    const {postsData, newPostText} = state;
    return <section className={styles._}>
        <ProfileInfo/>

        <div>
            <p>My posts</p>
            <PostSubmit newPostText={newPostText} submitPost={submitPost} updateNewPostText={updateNewPostText}/>
            <Posts postsData={postsData}/>
        </div>
    </section>
}

export default Profile;
