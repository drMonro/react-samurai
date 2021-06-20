import styles from './Navigation.module.css';


export const Navigation = () => {
    return <nav className={styles._}>
        <ul className={styles._list}>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Messages</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">Settings</a></li>
        </ul>
    </nav>
}

export default Navigation;
