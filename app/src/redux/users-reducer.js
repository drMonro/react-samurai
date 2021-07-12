const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

const initialState = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state = initialState, action) => {
    const followUser = (actionId) => {
        return state.users.map((user) => {
            if (user.id === actionId) {
                return {...user, isFollow: !user.isFollow};
            }
            return user;
        });
    };

    switch (action.type) {
        case FOLLOW:
            const followedUsers = followUser(action.userId);
            return {
                ...state,
                users: followedUsers,
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            };

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.totalUserCount,
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default:
            return state;
    }
}

export const followUser = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users,
    };
};

export const setTotalUsersCount = (usersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount: usersCount,
    };
};

export const setCurrentPage = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber,
    };
};

export const toggleFetchingStatus = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching,
    };
};

export default usersReducer;
