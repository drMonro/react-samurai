import styles from './DialogHistory.module.css';
import DialogItem from "../DialogItem/DialogItem";

export const DialogHistory = () => {
    const messagesData = [
        {message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {message: 'Lorem ipsum dolor sit amet.'},
        {message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
    ]

    const messagesElements = messagesData
        .map(({message}) => <DialogItem name="Olga" message={message}/>)

    return (
        <ul className={styles._dialogHistory}>
            {messagesElements}
        </ul>
    )
}

export default DialogHistory;
