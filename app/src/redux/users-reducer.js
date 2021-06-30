const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
    users: [],
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

export default usersReducer;
