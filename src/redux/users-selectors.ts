import {AppStateType} from './redux-store';

export const getUsers = (state:AppStateType) => state.usersPages.users
export const getPageSize = (state:AppStateType) => state.usersPages.pageSize
export const getTotalUsersCount = (state:AppStateType) => state.usersPages.totalUsersCount
export const getCurrentPage = (state:AppStateType) => state.usersPages.currentPage
export const getIsLoading = (state:AppStateType) => state.usersPages.isLoading
export const getFollowingInProgress = (state:AppStateType) => state.usersPages.followingInProgress

