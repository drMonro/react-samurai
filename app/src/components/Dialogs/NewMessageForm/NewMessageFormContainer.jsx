import NewMessageForm from "./NewMessageForm";
import {submitNewMessageActionCreator, updateNewMessageDataActionCreator} from "../../../redux/dialogs-reducer";

const NewMessageFormContainer = ({store, newMessage}) => {

    const onMessageSubmit = () => {
        store.dispatch(submitNewMessageActionCreator())
    };

    const onNewMessageChange = (text) => {
        store.dispatch(updateNewMessageDataActionCreator(text))
    };

    return <NewMessageForm updateNewMessageText={onNewMessageChange}
                           submitNewMessage={onMessageSubmit}
                           newMessage={newMessage}/>
};

export default NewMessageFormContainer;
