import styles from './ProfileInfo.module.css';
import userAvatar from '../../../assets/images/user-avatar.jpg'
import Status from "../Status/Status";

export const ProfileInfo = ({profile: {fullName, photos}, profileStatus, isObservingProfile}) => {
    const isAvatar = () => {
        if (!photos) {
            return userAvatar
        } else if (!photos.large) {
            return userAvatar
        } else {
            return photos.large
        }
    }

    return (
        <div>
            <Status profileStatus={profileStatus} isObservingProfile={isObservingProfile}/>
            <span>{fullName}</span>
            <div className={styles._avatar}>
                <img src={isAvatar()} alt={fullName}/>
            </div>
        </div>)
}

export default ProfileInfo;
