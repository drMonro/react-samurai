import styles from './Profile.module.css';


export const Profile = () => {
    return <section className={styles._}>
        <div className={styles._themePicture}>
            <img src="https://million-wallpapers.ru/wallpapers/4/14/17345193607846010880/ozero-potajnoe.jpg" alt=""/>
        </div>
        <div>
            ava + descr
        </div>
        <div>
            <p>My posts</p>
            <form>
                <p><input type="text-area"/></p>;
                <button type="submit">Send</button>
            </form>
            <ul>
                <li>Hey!</li>
                <li>What's up</li>
                <li>Peace!</li>
            </ul>
        </div>
    </section>
}

export default Profile;
