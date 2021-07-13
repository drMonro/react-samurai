import {connect} from "react-redux";
import {followUser, setCurrentPage, setTotalUsersCount, setUsers, toggleFetchingStatus} from "../../redux/users-reducer";
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
        this.props.toggleFetchingStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(({data}) => {
                this.props.toggleFetchingStatus(false);
                this.props.setUsers(this.adaptUserToClient(data.items));
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleFetchingStatus(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {withCredentials: true})
            .then(({data}) => {
                this.props.toggleFetchingStatus(false);
                this.props.setUsers(this.adaptUserToClient(data.items));
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
            />
        )
    }
}


const mapStateToProps = ({usersPage: {users, pageSize, totalUserCount, currentPage, isFetching}}) => {
    return {
        users,
        pageSize,
        totalUserCount,
        currentPage,
        isFetching,
    }
};

const dispatchesList = {
    followUser,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetchingStatus,
};

export default connect(mapStateToProps, dispatchesList)(UsersContainerClass);
