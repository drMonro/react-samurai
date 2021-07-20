import {connect} from "react-redux";
import React from "react";
import {compose} from "redux";
import Navigation from "./Navigation";

class NavigationContainer extends React.Component {
    render() {
        return <Navigation {...this.props}/>
    }
}

const mapStateToProps = ({profilePage: {profile}}) => {
    return {
        profile,
    }
};

const dispatchesList = {
};

export default compose(
    connect(mapStateToProps, dispatchesList),
)(NavigationContainer);
