import styles from './NewMessageForm.module.css';
import {submitNewMessageActionCreator, updateNewMessageDataActionCreator} from "../../../redux/dialogs-reducer";

export const NewMessageForm = ({dispatch, newMessage}) => {
    const onNewMessageChange = (evt) => {
        const newMessageData = evt.target.value;
        // console.log(newMessageData)
        dispatch(updateNewMessageDataActionCreator(newMessageData))
    }

    const onNewMessageSubmit = () => {
        dispatch(submitNewMessageActionCreator())
    }

    return (
        <div className={styles._}>
            <textarea onChange={onNewMessageChange} value={newMessage}/>
            <p>
                <button onClick={onNewMessageSubmit}>Send message</button>
            </p>
        </div>
    )
}

export default NewMessageForm;
