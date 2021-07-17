import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.userData,
                isAuth: true,
            }
        default:
            return state;
    }
}

const setUserData = (userData) => ({type: SET_USER_DATA, userData});

export const makeAuth = () => {
    return (dispatch) => {
        authAPI.getAuth().then(({data, resultCode}) => {
            if (resultCode === 0) {
                dispatch(setUserData(data));
            }
        });
    }
}

export default authReducer;

