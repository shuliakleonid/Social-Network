import {ActionType} from '../types/entities';
import {
  FOLLOW,
  SET_CURRENT_PAGE,
  SET_TOTAL_USERS_COUNT,
  SET_USERS,
  TOGGLE_IS_FOLLOWING,
  TOGGLE_IS_LOADING,
  UNFOLLOW
} from '../constant';
import {UserDataType, usersAPI} from '../api/api';
import {AppThunk} from './redux-store';
import {Dispatch} from 'redux';
import {updateObjectInArray} from '../utils/objects-helper/objects-helper';

type LocationType = {
  city: string
  country: string
}
export type UserType = {
  id: number
  photoUrl: string
  followed: boolean
  name: string
  status: string
  location: LocationType
}
export type UsersStateType = {
  users: Array<UserDataType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isLoading: boolean
  followingInProgress: Array<number>
}

 const initialState: UsersStateType = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: true,
  followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionType): UsersStateType => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: action.users}
    case FOLLOW:
      // return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : {...el})}
      return {...state, users: updateObjectInArray(state.users, action.userID, 'id', {followed: true})}
    case UNFOLLOW:
      // return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : {...el})}
      return {...state, users: updateObjectInArray(state.users, action.userID, 'id', {followed: false})}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.page}
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.count}
    case TOGGLE_IS_LOADING:
      return {...state, isLoading: action.payload}
    case TOGGLE_IS_FOLLOWING:
      return {
        ...state, followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id !== action.userId)
      }//убирает пользователя из массива(все кроме него)
    default:
      return state
  }
}

export const follow = (userID: number) => ({type: FOLLOW, userID: userID}) as const
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID: userID}) as const
export const currentPageChoice = (page: number) => ({type: SET_CURRENT_PAGE, page: page}) as const
export const setUsers = (users: Array<UserDataType>) => ({type: SET_USERS, users: users}) as const
export const toggleIsLoading = (action: boolean) => ({type: TOGGLE_IS_LOADING, payload: action}) as const
export const toggleIsFollowing = (userId: number, isFetching: boolean) => ({
  type: TOGGLE_IS_FOLLOWING,
  userId,
  isFetching
}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount}) as const


const followUnfollowFlow = async (dispatch: Dispatch<ActionType>, id: number, apiMethod: any, actionCreator: any) => {
  try {
    dispatch(toggleIsFollowing(id, true))
    const response = await apiMethod(id)
    if (response.resultCode === 0) {
      dispatch(actionCreator(id))
    }
    dispatch(toggleIsFollowing(id, false))
  } catch (e) {
    console.warn(e)
  }
}


export const requestUsers = (page: number, pageSize: number): AppThunk =>
    async (dispatch) => {
      try {
        dispatch(toggleIsLoading(true))
        dispatch(currentPageChoice(page))
        const usersData = await usersAPI.getUsers(page, pageSize)
        dispatch(setUsers(usersData.items))
        dispatch(setTotalUsersCount(usersData.totalCount))
        dispatch(toggleIsLoading(false))
      } catch (e) {
        console.warn(e)
      }
    }

export const getFollowThunkCreator = (id: number): AppThunk =>
    async (dispatch) => {
      const apiMethod = usersAPI.getFollow.bind(usersAPI)
      await followUnfollowFlow(dispatch, id, apiMethod, follow)
    }

export const getUnFollowThunkCreator = (id: number): AppThunk =>
    async (dispatch) => {
      const apiMethod = usersAPI.getUnfollow.bind(usersAPI)
      await followUnfollowFlow(dispatch, id, apiMethod, unfollow)
    }

