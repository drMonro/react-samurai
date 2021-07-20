import styles from './Navigation.module.css';
import {NavLink} from "react-router-dom";


export const Navigation = ({profile}) => {
    const getProfileId = () => {
        return !profile ? `` : `${profile.userId}`;
    }

    return <nav className={styles._}>
        <ul className={styles._list}>
            <li className={styles._linkItem}>
                <NavLink to={`/profile/${getProfileId()}`} activeClassName={styles._linkActive}>Profile</NavLink>
            </li>
            <li className={styles._linkItem}>
                <NavLink to="/dialogs" activeClassName={styles._linkActive}>Messages</NavLink>
            </li>
            <li className={styles._linkItem}>
                <NavLink to="/users" activeClassName={styles._linkActive}>Users</NavLink>
            </li>
        </ul>
    </nav>
}

export default Navigation;
