import {authAPI} from "../api/api";
import {getStatusProfile, setProfile} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                isAuth: true,
            }
        default:
            return state;
    }
}

const setAuthStatus = () => ({type: SET_USER_DATA});

export const makeAuth = () => {

    return (dispatch) => {
        authAPI.getAuth().then(({data, resultCode}) => {
            if (resultCode === 0) {
                dispatch(setAuthStatus());
                dispatch(setProfile(data.id));
                dispatch(getStatusProfile(data.id));
            }
        });
    }
}

export default authReducer;

