import {connect} from "react-redux";
import Profile from "./Profile";
import {getObservingProfile, getStatusProfile, onPostChange, onPostSubmit, setProfile, updateStatusProfile} from "../../redux/profile-reducer";
import React from "react";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    state = {
        profile: null,
        profileStatus: null,
        isObservingProfile: false,
    }

    componentDidMount() {

        if (Number(this.props.match.params.userId) === this.props.profile.userId) {
            this.setState({
                profile: this.props.profile,
                profileStatus: this.props.userStatus,
            })
        }

        if (Number(this.props.match.params.userId) !== this.props.profile.userId) {
            this.props.getObservingProfile(this.props.match.params.userId)
            this.props.getStatusProfile(this.props.match.params.userId);

        }
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({
                profileStatus: this.props.userStatus,
            })

        }

        if (prevProps.observingProfile !== this.props.observingProfile) {
            this.props.getStatusProfile(this.props.match.params.userId);

            this.setState({
                profile: this.props.observingProfile,
                isObservingProfile: true
            })
        }

        if (Number(prevProps.match.params.userId) !== Number(this.props.match.params.userId)) {
            if (Number(this.props.match.params.userId) === this.props.profile.userId) {
                this.props.getStatusProfile(this.props.match.params.userId);

                this.setState({
                    profile: this.props.profile,
                    isObservingProfile: false
                })
            }
        }

    }

    render() {
        return <Profile onPostChange={this.props.onPostChange}
                        newPostText={this.props.newPostText}
                        updateStatusProfile={this.props.updateStatusProfile}
                        postsData={this.props.postsData}
                        profile={this.state.profile}
                        profileStatus={this.state.profileStatus}
                        isObservingProfile={this.state.isObservingProfile}
                        onPostSubmit={this.props.onPostSubmit}/>
    }
}

const mapStateToProps = ({profilePage: {postsData, newPostText, profile, observingProfile, userStatus}}) => {
    return {
        newPostText,
        postsData,
        profile,
        observingProfile,
        userStatus
    }
};

const dispatchesList = {
    onPostChange,
    onPostSubmit,
    setProfile,
    getObservingProfile,
    getStatusProfile,
    updateStatusProfile,

};

export default compose(
    connect(mapStateToProps, dispatchesList),
    withAuthRedirect,
    withRouter,
)(ProfileContainer);
