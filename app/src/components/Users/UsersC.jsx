import React from "react";
import styles from './Users.module.css';
import User from "./User/User";
import axios from "axios";


class Users extends React.Component {
    constructor(props) {
        super(props);
        // const {users, onFollow, setUsers} = props;
        this.setUsers = props.setUsers;

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(({data}) => {
                // console.log(data.items)
                // console.log(adaptUserToClient(data.items))
                this.setUsers(adaptUserToClient(data.items));
            });


        // this.users = props.users;
        // this.onFollow = props.onFollow;

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



        // console.log(users)

    };

    usersElements() {
        console.log(this.users)
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
