import styles from './Navigation.module.css';
import {NavLink} from "react-router-dom";


export const Navigation = () => {
    return <nav className={styles._}>
        <ul className={styles._list}>
            <li className={styles._linkItem}>
                <NavLink to="/profile" activeClassName={styles._linkActive}>Profile</NavLink>
            </li>
            <li className={styles._linkItem}>
                <NavLink to="/dialogs" activeClassName={styles._linkActive}>Messages</NavLink>
            </li>

            {/*<li><a href="#">News</a></li>*/}
            {/*<li><a href="#">Music</a></li>*/}
            {/*<li><a href="#">Settings</a></li>*/}
        </ul>
    </nav>
}

export default Navigation;
