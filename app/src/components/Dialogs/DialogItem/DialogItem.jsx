import styles from './DialogItem.module.css';

export const DialogItem = ({name, message}) => {
    return (
            <li className={styles._}>
                <div className={styles._authorBlock}>
                    <img src="https://e7.pngegg.com/pngimages/688/352/png-clipart-computer-icons-user-symbol-symbol-miscellaneous-face.png" width="80" height="80" alt=""/>
                    <p>{name}</p>
                </div>
                <div className={styles._messageBlock}>
                    <p>{message}</p>
                </div>
            </li>

    )
}

export default DialogItem;
