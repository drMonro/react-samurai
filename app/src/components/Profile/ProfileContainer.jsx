import {connect} from "react-redux";
import Profile from "./Profile";
import {submitPostActionCreator, updateNewPostTextActionCreator} from "../../redux/profile-reducer";

const mapStateToProps = (state) => {
    const {profilePage: {postsData, newPostText}} = state;
    return {
        newPostText: newPostText,
        postsData: postsData,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        onPostSubmit: () => {
            dispatch(submitPostActionCreator())
        },
    }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
