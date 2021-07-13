import React from "react";
import {connect} from "react-redux";
import {setUserData} from "../../../redux/auth-reducer";
import AuthStatus from "./AuthStatus";
import {usersAPI} from "../../../api/api";

class AuthStatusContainerC extends React.Component {
    componentDidMount() {
            usersAPI.getAuth().then(({data}) => {
                if (data.resultCode === 0) {
                    this.props.setUserData(data);
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

