import styles from './Users.module.css';
import User from "./User/User";

export const Users = ({users, onFollow, setUsers}) => {
    if(!users.length) {
        setUsers([
            {
                id: 1,
                photoUrl: 'https://allya.ru/wp-content/uploads/2020/03/bMM09Rir7LFz6ZnofHmCnfENUZd.jpg',
                isFollow: false,
                name: 'Dmitry',
                status: "Let's rave",
                location: {
                    city: 'Chelsea',
                    country: 'UK',
                },
            },
            {
                id: 2,
                photoUrl: 'https://allya.ru/wp-content/uploads/2020/03/bMM09Rir7LFz6ZnofHmCnfENUZd.jpg',
                isFollow: false,
                name: 'Lisa',
                status: "Let's rave",
                location: {
                    city: 'Saint-Petersburg',
                    country: 'Russia',
                },
            },
            {
                id: 3,
                photoUrl: 'https://allya.ru/wp-content/uploads/2020/03/bMM09Rir7LFz6ZnofHmCnfENUZd.jpg',
                isFollow: false,
                name: 'Mia',
                status: "Let's rave",
                location: {
                    city: 'Sydney',
                    country: 'Australia',
                },
            },
        ])
    }


    const usersElements = users
        .map(({name, id, isFollow, photoUrl}) => <User name={name}
                                                       isFollow={isFollow}
                                                       key={id}
                                                       id={id}
                                                       onFollow={onFollow}
                                                       photoUrl={photoUrl}/>)
    return (
        <section className={styles._}>
            <h1>Users</h1>
            <ul className={styles._list}>
                {usersElements}
            </ul>
        </section>
    );

}

export default Users;
