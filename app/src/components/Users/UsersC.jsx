import React from "react";
import styles from './Users.module.css';
import User from "./User/User";
import axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        this.getUsers();
    }

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(({data}) => {
                this.props.setUsers(this.adaptUserToClient(data.items));
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    usersElements() {
        return this.props.users.map(({name, id, isFollow, photoUrl, photos}) => <User name={name}
                                                                                      isFollow={isFollow}
                                                                                      key={id}
                                                                                      id={id}
                                                                                      photos={photos}
                                                                                      onFollow={this.props.onFollow}
                                                                                      photoUrl={photoUrl}/>)
    };

    onPageChanged(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(({data}) => {
                this.props.setUsers(this.adaptUserToClient(data.items));
            });
    }

    usersPagination() {
        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <ul className={styles._pagination}>
                {pages.map(page => {
                    return (
                        <li onClick={() => this.onPageChanged(page)}
                            className={this.props.currentPage === page ? styles._selectedPage : ''}
                            key={page}>{page}
                        </li>)
                })}
            </ul>
        );
    };

    render() {
        return (
            <section className={styles._}>
                <h1>Users</h1>
                {this.usersPagination()}
                <ul className={styles._list}>
                    {this.usersElements()}
                </ul>
            </section>
        )
    }
}

export default Users;
