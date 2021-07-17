const SUBMIT_NEW_MESSAGE = 'SUBMIT_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE_NEW_MESSAGE_DATA';

const initialState = {
    newMessage: '',
    messagesData: [
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            id: 1,
        },
        {
            message: 'Lorem ipsum dolor sit amet.',
            id: 2,
        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            id: 3,
        },
    ],
    recipientsData: [
        {id: 1, name: 'Olga'},
        {id: 2, name: 'Toha'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Marta'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    const newMessage = {
        message: state.newMessage,
        id: 4,
    };
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_DATA:
            return {
                ...state,
                newMessage: action.newMessageData,
            }
        case SUBMIT_NEW_MESSAGE:

            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessage: '',
            }
        default:
            return state;
    }
}

export const submitNewMessage = () => {
    return {
        type: SUBMIT_NEW_MESSAGE,
    };
};

export const updateNewMessageData = (newMessageData) => {
    return {
        type: UPDATE_NEW_MESSAGE_DATA,
        newMessageData: newMessageData,
    };
};

export default dialogsReducer;
