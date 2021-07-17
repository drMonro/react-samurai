import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {submitNewMessage, updateNewMessageData} from "../../redux/dialogs-reducer";


const mapStateToProps = ({dialogsPage: {recipientsData, newMessage, messagesData}, auth: {isAuth}}) => {
    return {
        recipientsData,
        newMessage,
        messagesData,
        isAuth,
    }
};

const dispatchesList = {
    updateNewMessageData,
    submitNewMessage,
};

export default connect(mapStateToProps, dispatchesList)(Dialogs);

