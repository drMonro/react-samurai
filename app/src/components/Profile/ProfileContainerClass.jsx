import {connect} from "react-redux";
import Profile from "./Profile";
import {onPostChange, onPostSubmit, setProfile} from "../../redux/profile-reducer";
import React from "react";
import { withRouter } from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfile(this.props.match.params.userId)
    };

    render() {
        return <Profile {...this.props}/>
    };
}

const mapStateToProps = ({profilePage: {postsData, newPostText, profile}}) => {
    return {
        newPostText,
        postsData,
        profile,
    }
};

const dispatchesList = {
    onPostChange,
    onPostSubmit,
    setProfile,
};

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, dispatchesList),
)(ProfileContainer);
