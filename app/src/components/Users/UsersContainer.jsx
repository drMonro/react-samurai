import {connect} from "react-redux";
import {followUserAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC} from "../../redux/users-reducer";
import Users from "./UsersC";

const mapStateToProps = (state) => {
    const {usersPage: {users, pageSize, totalUserCount, currentPage}} = state;
    return {
        users: users,
        pageSize: pageSize,
        totalUserCount: totalUserCount,
        currentPage: currentPage,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFollow: (userId) => {
            dispatch(followUserAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount));
        },
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
