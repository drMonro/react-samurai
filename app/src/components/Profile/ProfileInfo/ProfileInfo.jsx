import styles from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div className={styles._themePicture}>
                <img src="https://million-wallpapers.ru/wallpapers/4/14/17345193607846010880/ozero-potajnoe.jpg" alt=""/>
            </div>
            <div>
                ava + descr
            </div>
        </div>)
}

export default ProfileInfo;
