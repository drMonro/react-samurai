import React from "react";
import styles from './Users.module.css';
import User from "./User/User";
import {usersPagination} from "./Pagination/Pagination";


const Users = ({totalUserCount, pageSize, onPageChanged, currentPage, users, onFollow, isFetching, inFollowingUsers}) => {


    const usersElements = () => users.map(({name, id, isFollow, photos}) => <User name={name}
                                                                                  isFollow={isFollow}
                                                                                  key={id}
                                                                                  id={id}
                                                                                  photos={photos}
                                                                                  onFollow={onFollow}
                                                                                  inFollowingUsers={inFollowingUsers}/>);

    // console.log(onPageChanged)
    return (
        <section className={styles._}>
            <h1>Users</h1>
            {usersPagination({
                    totalUserCount,
                    pageSize,
                    isFetching,
                    onPageChanged,
                    currentPage
                })}
            <ul className={styles._list}>
                {usersElements()}
            </ul>
        </section>
    )
}

export default Users;
