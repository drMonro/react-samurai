import styles from './Dialogs.module.css';
import Recipients from "./Recipients/Recipients";
import DialogHistory from "./DialogHistory/DialogHistory";
import NewMessageForm from "./NewMessageForm/NewMessageForm";

export const Dialogs = ({state, dispatch}) => {
    const {messagesData, recipientsData, newMessage} = state;
    return (
        <section className={styles._}>
            <p>Dialogs</p>
            <div className={styles._wrapper}>
                <Recipients recipientsData={recipientsData}/>
                <div className={styles._container}>
                    <DialogHistory messagesData={messagesData}/>
                    <NewMessageForm dispatch={dispatch} newMessage={newMessage}/>
                </div>
            </div>
        </section>)
}

export default Dialogs;
