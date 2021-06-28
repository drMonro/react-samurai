import styles from './Dialogs.module.css';
import Recipients from "./Recipients/Recipients";
import DialogHistory from "./DialogHistory/DialogHistory";
import NewMessageFormContainer from "./NewMessageForm/NewMessageFormContainer";

export const Dialogs = ({store, recipientsData, newMessage, messagesData}) => {
    return (
        <section className={styles._}>
            <p>Dialogs</p>
            <div className={styles._wrapper}>
                <Recipients recipientsData={recipientsData}/>
                <div>
                    <DialogHistory messagesData={messagesData}/>
                    <NewMessageFormContainer newMessage={newMessage} store={store}/>
                </div>
            </div>
        </section>);
};

export default Dialogs;
