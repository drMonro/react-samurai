import styles from './DialogHistory.module.css';
import DialogItem from "../DialogItem/DialogItem";

export const DialogHistory = ({messagesData}) => {
    const messagesElements = messagesData
        .map(({message}) => <DialogItem name="Olga" message={message}/>)

    return (
        <ul className={styles._dialogHistory}>
            {messagesElements}
        </ul>
    )
}

export default DialogHistory;
