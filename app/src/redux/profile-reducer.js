const SUBMIT_POST = 'SUBMIT_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    postsData: [
        {message: 'Hello!', id: 1},
        {message: 'Hi!', id: 2},
        {message: "What's up!", id: 3},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostData,
            };
        case SUBMIT_POST:
            const newPost = {
                message: state.newPostText,
                id: 4,
            };
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };
        default:
            return state;
    }
}

export const submitPostActionCreator = () => {
    return {
        type: SUBMIT_POST,
    }
};

export const updateNewPostTextActionCreator = (newPostText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostData: newPostText,
    }
};


export default profileReducer;
