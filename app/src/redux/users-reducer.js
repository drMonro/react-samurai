const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING';

const initialState = {
    users: [],
    pageSize: 100,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowing: false,
    inFollowingUsers: [],
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

    const followedUsers = followUser(action.userId);


    switch (action.type) {
        case FOLLOW:
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

        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                inFollowingUsers: action.isFollowing
                    ? [...state.inFollowingUsers, action.userId]
                    : state.inFollowingUsers.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
}

export const followUser = (userId) => {
    return {
        type: FOLLOW,
        userId,
    };
};

export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users,
    };
};

export const setTotalUsersCount = (totalUserCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount,
    };
};

export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage,
    };
};

export const toggleFetchingStatus = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    };
};

export const toggleFollowingStatus = (isFollowing, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        isFollowing,
        userId,
    };
};

export default usersReducer;
