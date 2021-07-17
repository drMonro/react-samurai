import styles from './AuthStatus.module.css';
import {NavLink} from "react-router-dom";

export const AuthStatus = ({isAuth}) => {
    const  ErrorLogin = () => (<NavLink to="/login" className={styles._error}>You need to login</NavLink>)
    const  SuccessLogin = () => (<p className={styles._success}>Logged In</p>)
    return (
        <div className={styles._}>
            {isAuth ? <SuccessLogin/> : <ErrorLogin/>}
        </div>
    );
}

export default AuthStatus;
