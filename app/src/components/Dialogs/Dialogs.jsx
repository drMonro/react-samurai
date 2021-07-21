import styles from './Dialogs.module.css';
import Recipients from "./Recipients/Recipients";
import DialogHistory from "./DialogHistory/DialogHistory";
import NewMessageForm from "./NewMessageForm/NewMessageForm";
import {Redirect} from "react-router-dom";

export const Dialogs = ({recipientsData, messagesData, submitNewMessage, isAuth}) => {
    if (!isAuth) return <Redirect to={"/login"}/>

    return (
        <section className={styles._}>
            <p>Dialogs</p>
            <div className={styles._wrapper}>
                <Recipients recipientsData={recipientsData}/>
                <div>
                    <DialogHistory messagesData={messagesData}/>
                    <NewMessageForm submitNewMessage={submitNewMessage}/>
                </div>
            </div>
        </section>);
};

export default Dialogs;
