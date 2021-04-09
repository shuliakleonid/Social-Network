import {AppStateType} from './redux-store';
import {createSelector} from 'reselect';

export const getUsers = (state: AppStateType) => state.usersPages.users
export const getUsersSelector = (state: AppStateType) => getUsers(state).filter(u => true)
export const getPageSize = (state: AppStateType) => state.usersPages.pageSize
export const getTotalUsersCount = (state: AppStateType) => state.usersPages.totalUsersCount
export const getCurrentPage = (state: AppStateType) => state.usersPages.currentPage
export const getIsLoading = (state: AppStateType) => state.usersPages.isLoading
export const getFollowingInProgress = (state: AppStateType) => state.usersPages.followingInProgress

export const getUsersSuperSelector = createSelector(getUsers,(users) => users.filter(u => true))
