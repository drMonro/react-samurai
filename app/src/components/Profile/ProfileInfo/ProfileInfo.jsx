import styles from './ProfileInfo.module.css';
import userAvatar from '../../../assets/images/user-avatar.jpg'
import Status from "../Status/Status";

export const ProfileInfo = ({fullName, photos, aboutMe}) => {
    const isAvatar = (photo) => {
        return !!photo.large ? photo.large : userAvatar;
    }


    return (
        <div>
            <Status aboutMe={aboutMe}/>
            <span>{fullName}</span>
            <div className={styles._avatar}>
                <img src={isAvatar(photos)} alt={fullName}/>
            </div>
        </div>)
}

export default ProfileInfo;
