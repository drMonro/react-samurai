import styles from './Dialogs.module.css';

export const Dialogs = () => {
    return (
        <section className={styles._}>
            <p>Dialogs</p>
            <div className={styles._wrapper}>
                <ul className={styles._recipientsList}>
                    <li className={styles._recipient}><a href="#">Olga</a></li>
                    <li className={styles._recipient}><a href="#">Toha</a></li>
                    <li className={styles._recipient}><a href="#">Alex</a></li>
                    <li className={styles._recipient}><a href="#">Marta</a></li>
                </ul>

                <ul className={styles._dialogHistory}>
                    <li className={styles._dialogItem}>
                        <div className={styles._authorBlock}>
                            <img src="https://e7.pngegg.com/pngimages/688/352/png-clipart-computer-icons-user-symbol-symbol-miscellaneous-face.png" width="80" height="80" alt=""/>
                            <p>Olga</p>
                        </div>
                        <div className={styles._messageBlock}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </li>
                    <li className={styles._dialogItem}>
                        <div className={styles._authorBlock}>
                            <img src="https://e7.pngegg.com/pngimages/688/352/png-clipart-computer-icons-user-symbol-symbol-miscellaneous-face.png" width="80" height="80" alt=""/>
                            <p>Me</p>
                        </div>
                        <div className={styles._messageBlock}>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </li>
                    <li className={styles._dialogItem}>
                        <div className={styles._authorBlock}>
                            <img src="https://e7.pngegg.com/pngimages/688/352/png-clipart-computer-icons-user-symbol-symbol-miscellaneous-face.png" width="80" height="80" alt=""/>
                            <p>Olga</p>
                        </div>
                        <div className={styles._messageBlock}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </section>)
}

export default Dialogs;
