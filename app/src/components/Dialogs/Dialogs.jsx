import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <section className={styles._}>
            <p>Dialogs</p>
            <div className={styles._wrapper}>
                <ul className={styles._recipientsList}>
                    <li className={styles._recipient}>
                        <NavLink to="/dialogs/1">Olga</NavLink>
                    </li>
                    <li className={styles._recipient}>
                        <NavLink to="/dialogs/2">Toha</NavLink>
                    </li>
                    <li className={styles._recipient}>
                        <NavLink to="/dialogs/3">Alex</NavLink>
                    </li>
                    <li className={styles._recipient}>
                        <NavLink to="/dialogs/4">Marta</NavLink>
                    </li>
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
