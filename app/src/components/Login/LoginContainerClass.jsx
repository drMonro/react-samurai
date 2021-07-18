import {connect} from "react-redux";
import Login from "./Login";
import React from "react";
import {compose} from "redux";

class LoginContainer extends React.Component {
    componentDidMount() {
        // this.props.setProfile(this.props.match.params.userId)
    };

    render() {
        return <Login {...this.props}/>
    };
}

const mapStateToProps = () => {
    return {
        // newPostText,
        // postsData,
        // profile
    }
};

const dispatchesList = {
    // onPostChange,
    // onPostSubmit,
    // setProfile,
};

// const withUrlDataContainerComponent = withRouter(ProfileContainer);

// export default connect(mapStateToProps, dispatchesList)(LoginContainer);

export default compose(
    connect(mapStateToProps, dispatchesList),
)(LoginContainer);
