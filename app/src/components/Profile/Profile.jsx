import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostSubmitContainer from "./PostSubmit/PostSubmitContainer";

export const Profile = ({onPostChange, onPostSubmit, newPostText, postsData}) => {
    return (
        <section className={styles._}>
            <ProfileInfo/>
            <div>
                <p>My posts</p>
                <PostSubmitContainer newPostText={newPostText}
                                     onPostSubmit={onPostSubmit}
                                     onPostChange={onPostChange}/>
                <Posts postsData={postsData}/>
            </div>
        </section>
    );

}

export default Profile;
