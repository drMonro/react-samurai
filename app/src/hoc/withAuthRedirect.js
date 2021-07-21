import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {checkAuthorization} from "../redux/auth-reducer";

const mapStateToProps = ({auth: {isAuth}}) => {
    return {
        isAuth
    }
};

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        componentDidMount() {
            if (!this.props.isAuth) {
                this.props.makeAuth();
            }
        }

        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>
            return <Component {...this.props}/>
        }
    }

    const dispatchesList = {
        makeAuth: checkAuthorization,
    }


    return connect(mapStateToProps, dispatchesList)(RedirectComponent);
}
