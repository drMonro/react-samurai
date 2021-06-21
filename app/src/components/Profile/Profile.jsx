import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostSubmit from "./PostSubmit/PostSubmit";

export const Profile = ({postsData}) => {
    return <section className={styles._}>
        <ProfileInfo/>

        <div>
            <p>My posts</p>
            <PostSubmit/>
            <Posts postsData={postsData}/>
        </div>
    </section>
}

export default Profile;
