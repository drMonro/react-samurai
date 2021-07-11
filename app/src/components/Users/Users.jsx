import styles from './Users.module.css';
import User from "./User/User";
import axios from "axios";

export const Users = ({users, onFollow, setUsers}) => {

    const getUsers = () => {
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

        if (!users.length) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(({data}) => {
                    setUsers(adaptUserToClient(data.items));
                })
        }
    };

    const usersElements = users
        .map(({name, id, isFollow, photoUrl, photos}) => <User name={name}
                                                               isFollow={isFollow}
                                                               key={id}
                                                               id={id}
                                                               photos={photos}
                                                               onFollow={onFollow}
                                                               photoUrl={photoUrl}/>)
    return (
        <section className={styles._}>
            <h1>Users</h1>
            <button onClick={getUsers}>Get Users</button>
            <ul className={styles._list}>
                {usersElements}
            </ul>
        </section>
    );

}

export default Users;
