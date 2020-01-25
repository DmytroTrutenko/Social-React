import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/helpers";

const FOLLOW = 'USERS/FOLLOW',
    UNFOLLOW = 'USERS/UNFOLLOW',
    SET_USERS = 'USERS/SET-USERS',
    SET_CURRENT_PAGE = 'USERS/SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'USERS/SET-TOTAL-USERS-COUNT',
    TOGGLE_IS_FETCHING = 'USERS/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FOLLOWING = 'USERS/TOGGLE_IS_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 0,
    currentPage: 4,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            };
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            };
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            };
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            };
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            };
        }
        case TOGGLE_IS_FOLLOWING: {
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };
        }
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
});

export const unfollowSuccess = (userId) => ({
    type: UNFOLLOW,
    userId
});

export const setUsers = (users) => ({
    type: SET_USERS,
    users
});

export const setCurrentPage = (pageNumber) => ({
    type: SET_CURRENT_PAGE,
    currentPage: pageNumber
});

export const setTotalUsersCount = (countNumber) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: countNumber
});

export const setIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
});
export const setIsFollowing = (followingInProgress, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    followingInProgress,
    userId
});

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

};

//вспомогающий метод follow unfollow
const followUnfollowFlow = async (dispatch, id, apiMethod, actionCreator) => {
    dispatch(setIsFollowing(true, id));
    let data = await apiMethod(id);
    if (data.resultCode === 0) {
        dispatch(actionCreator(id));
    }
    dispatch(setIsFollowing(false, id));
};

export const follow = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.followUser.bind(usersAPI), followSuccess);
};

export const unfollow = (id) => async (dispatch) => {
    followUnfollowFlow(dispatch, id, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess);
};

export default usersReducer;