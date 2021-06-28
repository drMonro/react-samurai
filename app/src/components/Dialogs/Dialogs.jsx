import styles from './Dialogs.module.css';
import Recipients from "./Recipients/Recipients";
import DialogHistory from "./DialogHistory/DialogHistory";
import NewMessageFormContainer from "./NewMessageForm/NewMessageFormContainer";

export const Dialogs = ({store}) => {
    const {dialogsPage: {recipientsData, newMessage, messagesData}} = store.getState();
    return (
        <section className={styles._}>
            <p>Dialogs</p>
            <div className={styles._wrapper}>
                <Recipients recipientsData={recipientsData}/>
                <div className={styles._container}>
                    <DialogHistory messagesData={messagesData}/>
                    <NewMessageFormContainer newMessage={newMessage} store={store}/>
                </div>
            </div>
        </section>);
};

export default Dialogs;
