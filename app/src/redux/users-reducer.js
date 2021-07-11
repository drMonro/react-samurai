const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
    users: [],
    pageSize: 4,
    totalUserCount: 0,
    currentPage: 1,
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
        default:
            return state;
    }
}

export const followUserAC = (userId) => {
    return {
        type: FOLLOW,
        userId: userId,
    };
};

export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users,
    };
};

export const setTotalUsersCountAC = (usersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount: usersCount,
    };
};

export const setCurrentPageAC = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: pageNumber,
    };
};

export default usersReducer;
