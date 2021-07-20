import {profileAPI} from "../api/api";

const SUBMIT_POST = 'SUBMIT_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_OBSERVING_PROFILE = 'SET_OBSERVING_PROFILE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
    postsData: [
        {message: 'Hello!', id: 1},
        {message: 'Hi!', id: 2},
        {message: "What's up!", id: 3},
    ],
    newPostText: '',
    profile: null,
    observingProfile: null,
    userStatus: "",
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
        case SET_OBSERVING_PROFILE:
            return {
                ...state,
                observingProfile: action.userData,
            };
        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.status,

            };
        default:
            return state;
    }
}

export const onPostSubmit = () => ({type: SUBMIT_POST});
export const onPostChange = (newPostData) => ({type: UPDATE_NEW_POST_TEXT, newPostData});
const setUserProfile = (userData) => ({type: SET_USER_PROFILE, userData});
const setObservingProfile = (userData) => ({type: SET_OBSERVING_PROFILE, userData});
const setUserStatus = (status) => ({type: SET_USER_STATUS, status});


export const setProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileData(userId)
            .then((data) => {
                dispatch(setUserProfile(data));
            });
        getStatusProfile(userId)
    }
}


export const getObservingProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileData(userId)
            .then((data) => {

                dispatch(setObservingProfile(data));
            });
    }
}


export const getStatusProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfileStatus(userId)
            .then((data) => {
                console.log('get st')
                console.log(data)
                dispatch(setUserStatus(data));
            });
    }
}


export default profileReducer;
