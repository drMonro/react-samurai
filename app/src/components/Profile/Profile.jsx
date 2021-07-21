import styles from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../common/Preloader/Preloader";
import PostSubmit from "./PostSubmit/PostSubmit";

export const Profile = ({onPostSubmit, postsData, profile, profileStatus, isObservingProfile, updateStatusProfile}) => {
    if (!profile) {return <Preloader/>}
    return (
        <section className={styles._}>
            <ProfileInfo profile={profile} profileStatus={profileStatus} isObservingProfile={isObservingProfile} updateStatusProfile={updateStatusProfile}/>
            <div>
                <p>My posts</p>
                {isObservingProfile ? null : <PostSubmit submitPost={onPostSubmit}/>}

                <Posts postsData={postsData}/>
            </div>
        </section>
    );

}

export default Profile;
