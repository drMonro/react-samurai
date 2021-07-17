import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {submitNewMessage, updateNewMessageData} from "../../redux/dialogs-reducer";


const mapStateToProps = (state) => {
    const {dialogsPage: {recipientsData, newMessage, messagesData}} = state;
    return {
        recipientsData: recipientsData,
        newMessage: newMessage,
        messagesData: messagesData,
    }
};

const dispatchesList = {
    updateNewMessageData,
    submitNewMessage,
};

export default connect(mapStateToProps, dispatchesList)(Dialogs);

