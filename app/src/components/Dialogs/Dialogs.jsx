import styles from './Dialogs.module.css';
import Recipients from "./Recipients/Recipients";
import DialogHistory from "./DialogHistory/DialogHistory";
import NewMessageFormContainer from "./NewMessageForm/NewMessageFormContainer";

export const Dialogs = ({recipientsData, newMessage, messagesData, onNewMessageChange, onNewMessageSubmit}) => {
    return (
        <section className={styles._}>
            <p>Dialogs</p>
            <div className={styles._wrapper}>
                <Recipients recipientsData={recipientsData}/>
                <div>
                    <DialogHistory messagesData={messagesData}/>
                    <NewMessageFormContainer newMessage={newMessage}
                                             onNewMessageChange={onNewMessageChange}
                                             onNewMessageSubmit={onNewMessageSubmit}/>
                </div>
            </div>
        </section>);
};

export default Dialogs;
