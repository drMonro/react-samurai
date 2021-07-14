import {connect} from "react-redux";
import {followUser, setCurrentPage, setTotalUsersCount, setUsers, toggleFetchingStatus, toggleFollowingStatus} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import {usersAPI} from "../../api/api";

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
        this.props.toggleFetchingStatus(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(({items, totalCount}) => {
                this.props.toggleFetchingStatus(false);
                this.props.setUsers(this.adaptUserToClient(items));
                this.props.setTotalUsersCount(totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleFetchingStatus(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(({items}) => {
                this.props.toggleFetchingStatus(false);
                this.props.setUsers(this.adaptUserToClient(items));
            });
    };

    render() {
        return (<Users users={this.props.users}
                       isFetching={this.props.isFetching}
                       onFollow={this.props.followUser}
                       onPageChanged={this.onPageChanged}
                       totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       toggleFollowingStatus={this.props.toggleFollowingStatus}
                       isFollowing={this.props.isFollowing}
                       inFollowingUsers={this.props.inFollowingUsers}
            />
        )
    }
}


const mapStateToProps = ({usersPage: {users, pageSize, totalUserCount, currentPage, isFetching, isFollowing, inFollowingUsers}}) => {
    return {
        users,
        pageSize,
        totalUserCount,
        currentPage,
        isFetching,
        isFollowing,
        inFollowingUsers,
    }
};

const dispatchesList = {
    followUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetchingStatus,
    toggleFollowingStatus,
};

export default connect(mapStateToProps, dispatchesList)(UsersContainerClass);
