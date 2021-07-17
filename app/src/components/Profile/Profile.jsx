import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";
import PostSubmit from "./PostSubmit/PostSubmit";
import {Redirect} from "react-router-dom";

export const Profile = ({onPostChange, onPostSubmit, newPostText, postsData, profile, isAuth}) => {
    if (!profile) {return <Preloader/>}
    if (!isAuth) return <Redirect to={"/login"}/>
    return (
        <section className={styles._}>
            <ProfileInfo {...profile}/>
            <div>
                <p>My posts</p>
                <PostSubmit newPostText={newPostText}
                            submitPost={onPostSubmit}
                            updatePostText={onPostChange}/>
                <Posts postsData={postsData}/>
            </div>
        </section>
    );

}

export default Profile;
