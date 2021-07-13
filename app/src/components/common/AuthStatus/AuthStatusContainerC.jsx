import React from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setUserData} from "../../../redux/auth-reducer";
import AuthStatus from "./AuthStatus";

class AuthStatusContainerC extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(({data}) => {
                if (data.resultCode === 0) {
                    this.props.setUserData(data.data);
                }
            });
    }

    render() {
        return <AuthStatus {...this.props}/>
    }
}

const mapStateToProps = ({auth}) => {
    return {
        authId: auth.id
    }
};

const dispatchesList = {
    setUserData
};

export default connect(mapStateToProps, dispatchesList)(AuthStatusContainerC);

