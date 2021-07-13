import React from "react";
import styles from './Users.module.css';
import User from "./User/User";
import Preloader from "../common/Preloader/Preloader";



let Users = ({totalUserCount, pageSize, onPageChanged, currentPage, users, onFollow, isFetching}) => {
    const usersPagination = () => {
        const pagesCount = Math.ceil(totalUserCount / pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (<>
                {isFetching ? <Preloader/> : null}
                <ul className={styles._pagination}>
                    {pages.map(page => {
                        return (
                            <li onClick={() => onPageChanged(page)}
                                className={currentPage === page ? styles._selectedPage : ''}
                                key={page}>{page}
                            </li>)
                    })}
                </ul>
            </>
        );
    };

    const usersElements = () => users.map(({name, id, isFollow, photoUrl, photos}) => <User name={name}
                                                                                            isFollow={isFollow}
                                                                                            key={id}
                                                                                            id={id}
                                                                                            photos={photos}
                                                                                            onFollow={onFollow}
                                                                                            photoUrl={photoUrl}/>);

    return (
        <section className={styles._}>
            <h1>Users</h1>
            {usersPagination()}
            <ul className={styles._list}>
                {usersElements()}
            </ul>
        </section>
    )
}

export default Users;
