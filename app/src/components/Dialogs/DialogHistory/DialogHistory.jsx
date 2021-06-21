import styles from './DialogHistory.module.css';
import DialogItem from "../DialogItem/DialogItem";

export const DialogHistory = () => {
    const messagesData = [
        {message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {message: 'Lorem ipsum dolor sit amet.'},
        {message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
    ]

    return (
        <ul className={styles._dialogHistory}>
            <DialogItem name="Olga" message={messagesData[0].message}/>
            <DialogItem name="Me" message={messagesData[1].message}/>
            <DialogItem name="Olga" message={messagesData[2].message}/>

        </ul>
    )
}

export default DialogHistory;
