import styles from './NewMessageForm.module.css';

export const NewMessageForm = ({updateNewMessageText, submitNewMessage, newMessage}) => {
    const onNewMessageChange = (evt) => {
        const newMessageData = evt.target.value;
        updateNewMessageText(newMessageData);
    };

    const onNewMessageSubmit = (evt) => {
        evt.preventDefault();
        submitNewMessage();
    };

    return (
        <div className={styles._}>
            <textarea onChange={onNewMessageChange} value={newMessage}/>
            <p>
                <button onClick={onNewMessageSubmit}>Send message</button>
            </p>
        </div>
    );
};

export default NewMessageForm;
