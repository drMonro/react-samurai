import NewMessageForm from "./NewMessageForm";

const NewMessageFormContainer = ({newMessage, onNewMessageChange, onNewMessageSubmit}) => {

    const submitNewMessage = () => {
        onNewMessageSubmit();
    };

    const updateNewMessageText = (text) => {
        onNewMessageChange(text);
    };

    return <NewMessageForm updateNewMessageText={updateNewMessageText}
                           submitNewMessage={submitNewMessage}
                           newMessage={newMessage}/>
};

export default NewMessageFormContainer;