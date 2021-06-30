import {connect} from "react-redux";
import {followUserAC, setUsersAC} from "../../redux/users-reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
    const {usersPage: {users}} = state;
    return {
        users: users,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(followUserAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
