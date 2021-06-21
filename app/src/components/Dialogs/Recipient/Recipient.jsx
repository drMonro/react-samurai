import styles from './Recipient.module.css';
import {NavLink} from "react-router-dom";

export const Recipient = ({name, id}) => {
    const path = "/dialogs/" + id;

    return (
        <li className={styles._recipient}>
            <NavLink to={path}>{name}</NavLink>
        </li>
    )
}

export default Recipient;
