import styles from './Navigation.module.css';


export const Navigation = () => {
    return <nav className={styles._}>
        <ul className={styles._list}>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/dialogs">Messages</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Settings</a></li>
        </ul>
    </nav>
}

export default Navigation;
