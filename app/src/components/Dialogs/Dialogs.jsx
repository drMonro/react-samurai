import styles from './Dialogs.module.css';
import Recipients from "./Recipients/Recipients";
import DialogHistory from "./DialogHistory/DialogHistory";
import NewMessageForm from "./NewMessageForm/NewMessageForm";
import {Redirect} from "react-router-dom";

export const Dialogs = ({recipientsData, newMessage, messagesData, updateNewMessageData, submitNewMessage, isAuth}) => {
    if (!isAuth) return <Redirect to={"/login"}/>

    return (
        <section className={styles._}>
            <p>Dialogs</p>
            <div className={styles._wrapper}>
                <Recipients recipientsData={recipientsData}/>
                <div>
                    <DialogHistory messagesData={messagesData}/>
                    <NewMessageForm newMessage={newMessage}
                                             onNewMessageChange={updateNewMessageData}
                                             onNewMessageSubmit={submitNewMessage}/>
                </div>
            </div>
        </section>);
};

export default Dialogs;
