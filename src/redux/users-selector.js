import {createSelector} from 'reselect';

const getUsersSelector = (state) => {
    return state.usersPage.users;
};
//создание селектора с помощью библиотеки reselect
//будет перерисовка только когда изменится state в users
export const getUsers = createSelector(getUsersSelector, users => {
    return users.filter(u => true);
});

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
};
