import styles from './ProfileInfo.module.css';
import userAvatar from '../../../assets/images/user-avatar.jpg'

export const ProfileInfo = ({fullName, photos}) => {
    const isAvatar = (photo) => {
        console.log(!!photo.large)
        return !!photo.large ? photo.large  : userAvatar;
    }


    return (
        <div>
            <div className={styles._themePicture}>
                <img src="https://million-wallpapers.ru/wallpapers/4/14/17345193607846010880/ozero-potajnoe.jpg" alt=""/>
            </div>
            <h3>Name:</h3>
            <span>{fullName}</span>
            <div className={styles._avatar}>
                <img src={isAvatar(photos)}/>
            </div>
        </div>)
}

export default ProfileInfo;
