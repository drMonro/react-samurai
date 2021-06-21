import styles from './Recipients.module.css';
import Recipient from "../Recipient/Recipient";

export const Recipients = () => {
    return (
        <ul className={styles._recipientsList}>
            <Recipient name="Olga" id="1"/>
            <Recipient name="Toha" id="2"/>
            <Recipient name="Alex" id="3"/>
            <Recipient name="Marta" id="4"/>
        </ul>
    )
}

export default Recipients;
