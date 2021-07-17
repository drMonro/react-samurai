import {connect} from "react-redux";
import {followUser, getUsers} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";

class UsersContainerClass extends React.Component {
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);

    };

    render() {
        return (<Users users={this.props.users}
                       isFetching={this.props.isFetching}
                       onFollow={this.props.followUser}
                       onPageChanged={this.onPageChanged}
                       totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
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
    getUsers,
};

export default connect(mapStateToProps, dispatchesList)(UsersContainerClass);
