import React from "react";
import {connect} from "react-redux";
import {makeAuth} from "../../../redux/auth-reducer";
import AuthStatus from "./AuthStatus";

class AuthStatusContainerC extends React.Component {
    componentDidMount() {
        this.props.makeAuth();
    }

    render() {
        return <AuthStatus authId={this.props.authId}/>
    }
}

const mapStateToProps = ({auth}) => {
    return {
        authId: auth.id
    }
};

const dispatchesList = {
    makeAuth
};

export default connect(mapStateToProps, dispatchesList)(AuthStatusContainerC);

