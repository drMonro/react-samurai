import styles from './AuthStatus.module.css';

export const AuthStatus = ({authId}) => {
    console.log(authId)

    const  ErrorLogin = () => (<p className={styles._error}>You need to login</p>)
    const  SuccessLogin = () => (<p className={styles._success}>Logged In</p>)
    return (
        <div className={styles._}>
            {!!authId ? <SuccessLogin/> : <ErrorLogin/>}

        </div>
    );
}

export default AuthStatus;
