import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";
import PostSubmit from "./PostSubmit/PostSubmit";

export const Profile = ({onPostChange, onPostSubmit, newPostText, postsData, profile, profileStatus, isObservingProfile, updateStatusProfile}) => {
    if (!profile) {return <Preloader/>}
    return (
        <section className={styles._}>
            <ProfileInfo profile={profile} profileStatus={profileStatus} isObservingProfile={isObservingProfile} updateStatusProfile={updateStatusProfile}/>
            <div>
                <p>My posts</p>
                {isObservingProfile ? null : <PostSubmit newPostText={newPostText}
                                                         submitPost={onPostSubmit}
                                                         updatePostText={onPostChange}/>}

                <Posts postsData={postsData}/>
            </div>
        </section>
    );

}

export default Profile;
