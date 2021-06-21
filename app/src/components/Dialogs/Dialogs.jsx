import styles from './Dialogs.module.css';
import Recipients from "./Recipients/Recipients";
import DialogHistory from "./DialogHistory/DialogHistory";

export const Dialogs = ({state}) => {
    const {messagesData, recipientsData} = state;
    return (
        <section className={styles._}>
            <p>Dialogs</p>
            <div className={styles._wrapper}>
                <Recipients recipientsData={recipientsData}/>
                <DialogHistory messagesData={messagesData}/>
            </div>
        </section>)
}

export default Dialogs;
