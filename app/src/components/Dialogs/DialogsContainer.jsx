import Dialogs from "./Dialogs";
import {submitPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";
import {connect} from "react-redux";


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
            dispatch(updateNewPostTextActionCreator(text))
        },
        onNewMessageSubmit: () => {
            dispatch(submitPostActionCreator())
        },
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
