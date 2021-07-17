import {connect} from "react-redux";
import Profile from "./Profile";
import {onPostChange, onPostSubmit, setProfile} from "../../redux/profile-reducer";
import React from "react";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfile(this.props.match.params.userId)
    };

    render() {
        return <Profile {...this.props}/>
    };
}

const mapStateToProps = ({profilePage: {postsData, newPostText, profile}, auth:{isAuth}}) => {
    return {
        newPostText,
        postsData,
        profile,
        isAuth
    }
};

const dispatchesList = {
    onPostChange,
    onPostSubmit,
    setProfile,
};

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, dispatchesList)(withUrlDataContainerComponent);

