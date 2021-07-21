const SUBMIT_NEW_MESSAGE = 'SUBMIT_NEW_MESSAGE';

const initialState = {
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
    switch (action.type) {
        case SUBMIT_NEW_MESSAGE:

            return {
                ...state,
                messagesData: [...state.messagesData, {
                    message: action.data.newMessageText,
                    id: 4,
                }],
            }
        default:
            return state;
    }
}

export const submitNewMessage = (data) => {
    return {
        type: SUBMIT_NEW_MESSAGE,
        data
    };
};

export default dialogsReducer;
