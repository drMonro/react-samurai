import {connect} from "react-redux";
import Profile from "./Profile";
import {onPostChange, onPostSubmit, setUserProfile} from "../../redux/profile-reducer";
import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(({data}) => {
                this.props.setUserProfile(data);
            });
    };

    render() {
        return <Profile {...this.props}/>
    };
};



const mapStateToProps = ({profilePage: {postsData, newPostText, profile}}) => {
    return {
        newPostText,
        postsData,
        profile
    }
};

const dispatchesList = {
    onPostChange,
    onPostSubmit,
    setUserProfile,
};

const withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, dispatchesList)(withUrlDataContainerComponent);

