import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                const {dialogsPage: {recipientsData, newMessage, messagesData}} = store.getState();
                return <Dialogs store={store}
                                recipientsData={recipientsData}
                                newMessage={newMessage}
                                messagesData={messagesData}/>;
            }}
        </StoreContext.Consumer>);
}

export default DialogsContainer;
