import styles from './Pagination.module.css';
import Preloader from "../../common/Preloader/Preloader";
import React from "react";

export const usersPagination = ({totalUserCount, pageSize, isFetching, onPageChanged, currentPage}) => {
    const pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (<>
            {isFetching ? <Preloader/> : null}
            <ul className={styles._}>
                {pages.map(page => {
                    return (
                        <li onClick={() => onPageChanged(page)}
                            className={`${currentPage === page ? styles._selected : ''} ${styles._element}`}
                            key={page}>{page}
                        </li>)
                })}
            </ul>
        </>
    );
}

