import {connect} from "react-redux";
import {followUserAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleFetchingStatusAC} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersContainerClass extends React.Component {
    componentDidMount() {
        this.getUsers();
    };

    adaptUserToClientMethod(user) {
        const adaptedUser = {
            ...user,
            isFollow: user.followed,
        };
        delete adaptedUser.followed;
        return adaptedUser;
    };

    adaptUserToClient(usersData) {
        return usersData.map(this.adaptUserToClientMethod);
    };

    getUsers() {
        this.props.setFetchingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(({data}) => {
                this.props.setFetchingStatus(false);
                this.props.setUsers(this.adaptUserToClient(data.items));
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setFetchingStatus(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(({data}) => {
                this.props.setFetchingStatus(false);
                this.props.setUsers(this.adaptUserToClient(data.items));
            });
    };

    render() {
        return (<Users users={this.props.users}
                       isFetching={this.props.isFetching}
                       onFollow={this.props.onFollow}
                       onPageChanged={this.onPageChanged}
                       totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                />
        )
    }
}


const mapStateToProps = ({usersPage: {users, pageSize, totalUserCount, currentPage, isFetching}}) => {
    return {
        users: users,
        pageSize: pageSize,
        totalUserCount: totalUserCount,
        currentPage: currentPage,
        isFetching: isFetching,
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
        setFetchingStatus: (isFetching) => {
            dispatch(toggleFetchingStatusAC(isFetching));
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainerClass);
