const SUBMIT_NEW_MESSAGE = 'SUBMIT_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE_NEW_MESSAGE_DATA';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_DATA:
            state.newMessage = action.newMessageData;
            return state;
        case SUBMIT_NEW_MESSAGE:
            const newMessage = {
                message: state.newMessage,
            };
            state.messagesData.push(newMessage);
            state.newMessage = '';
            return state;
        default:
            return state;
    }
}

export const submitNewMessageActionCreator = () => {
    return {
        type: SUBMIT_NEW_MESSAGE,
    }
};

export const updateNewMessageDataActionCreator = (newMessageData) => {
    return {
        type: UPDATE_NEW_MESSAGE_DATA,
        newMessageData: newMessageData,
    }
};

export default dialogsReducer;
