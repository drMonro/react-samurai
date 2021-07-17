import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {submitNewMessage, updateNewMessageData} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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

const AuthRedirectComponent = withAuthRedirect(Dialogs)

export default connect(mapStateToProps, dispatchesList)(AuthRedirectComponent);

