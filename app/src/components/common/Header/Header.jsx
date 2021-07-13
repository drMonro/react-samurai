import styles from './Header.module.css';
import AuthStatusContainer from "../AuthStatus/AuthStatusContainer";

export const Header = () => {

    return (
        <header className={styles._}>
            <img src="http://cdn.onlinewebfonts.com/svg/img_176857.png" alt="" width="50px" height="50px"/>
            <AuthStatusContainer />

        </header>
    );
}

export default Header;
