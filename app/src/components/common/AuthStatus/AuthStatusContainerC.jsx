import React from "react";
import {connect} from "react-redux";
import {checkAuthorization} from "../../../redux/auth-reducer";
import AuthStatus from "./AuthStatus";

class AuthStatusContainerC extends React.Component {
    componentDidMount() {
        this.props.makeAuth();
    }

    render() {
        return <AuthStatus isAuth={this.props.isAuth}/>
    }
}

const mapStateToProps = ({auth: {isAuth}}) => {
    // console.log(isAuth)
    return {
        isAuth,
    }
};

const dispatchesList = {
    makeAuth: checkAuthorization
};

export default connect(mapStateToProps, dispatchesList)(AuthStatusContainerC);

