import styles from './DialogHistory.module.css';
import DialogItem from "../DialogItem/DialogItem";

export const DialogHistory = () => {
    return (
        <ul className={styles._dialogHistory}>
            <DialogItem name="Olga" message="Lorem ipsum dolor sit amet, consectetur adipisicing."/>
            <DialogItem name="Me" message="Lorem ipsum dolor sit amet."/>
            <DialogItem name="Olga" message="Lorem ipsum dolor sit amet, consectetur adipisicing."/>

        </ul>
    )
}

export default DialogHistory;
