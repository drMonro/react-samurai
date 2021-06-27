const SUBMIT_POST = 'SUBMIT_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const initialState = {
    postsData: [
        {message: 'Hello!'},
        {message: 'Hi!'},
        {message: "What's up!"},
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostData;
            return state;
        case SUBMIT_POST:
            const newPost = {
                message: state.newPostText,
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state;
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
