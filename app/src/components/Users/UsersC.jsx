import React from "react";
import styles from './Users.module.css';
import User from "./User/User";
import axios from "axios";


class Users extends React.Component {
    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        const adaptUserToClientMethod = (user) => {
            const adaptedUser = {
                ...user,
                isFollow: user.followed,
            };
            delete adaptedUser.followed;
            return adaptedUser;
        };

        const adaptUserToClient = (usersData) => {
            return usersData.map(adaptUserToClientMethod);
        };


        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(({data}) => {
                this.props.setUsers(adaptUserToClient(data.items));
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

    render() {
        return (
            <section className={styles._}>
                <h1>Users</h1>
                <ul className={styles._list}>
                    {this.usersElements()}
                </ul>
            </section>
        )
    }
}

export default Users;
