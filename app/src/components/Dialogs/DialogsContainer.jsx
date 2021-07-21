import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {submitNewMessage} from "../../redux/dialogs-reducer";
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
    submitNewMessage,
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, dispatchesList),
)(Dialogs);
