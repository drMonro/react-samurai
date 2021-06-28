import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {submitNewMessageActionCreator, updateNewMessageDataActionCreator} from "../../redux/dialogs-reducer";


const mapStateToProps = (state) => {
    const {dialogsPage: {recipientsData, newMessage, messagesData}} = state;
    return {
        recipientsData: recipientsData,
        newMessage: newMessage,
        messagesData: messagesData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageChange: (text) => {
            dispatch(updateNewMessageDataActionCreator(text))
        },
        onNewMessageSubmit: () => {
            dispatch(submitNewMessageActionCreator())
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
