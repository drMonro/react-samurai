import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {submitNewMessage, updateNewMessageData} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = ({dialogsPage: {recipientsData, newMessage, messagesData}}) => {
    return {
        recipientsData,
        newMessage,
        messagesData,
    }
};

const dispatchesList = {
    updateNewMessageData,
    submitNewMessage,
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, dispatchesList),
)(Dialogs);
