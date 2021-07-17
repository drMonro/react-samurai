import {usersAPI} from "../api/api";

const SUBMIT_POST = 'SUBMIT_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    postsData: [
        {message: 'Hello!', id: 1},
        {message: 'Hi!', id: 2},
        {message: "What's up!", id: 3},
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    const newPost = {
        message: state.newPostText,
        id: 4,
    };

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostData,
            };
        case SUBMIT_POST:
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.userData,

            };
        default:
            return state;
    }
}

export const onPostSubmit = () => {
    return {
        type: SUBMIT_POST,
    }
};

export const setUserProfile = (userData) => {
    return {
        type: SET_USER_PROFILE,
        userData,
    }
};

export const onPostChange = (newPostData) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostData,
    }
};

export const setProfile = (userId) => {
    return (dispatch) => {
        let user = userId;
        if (!user) {
            user = 2
        }
        usersAPI.getProfileData(user)
            .then((data) => {
                dispatch(setUserProfile(data));
            });
    }
}


export default profileReducer;
