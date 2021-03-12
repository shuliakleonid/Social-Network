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
import {UsersApiPropsType} from '../Components/Users/UsersFunction';
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

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
export type InitialStateType = {
  users: Array<UsersApiPropsType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isLoading: boolean
  followingInProgress: Array<number>
}

const initialState: InitialStateType = {
  users: [
    /* {
       id: 1,
       followed: true,
       name: 'Dmitry',
       photos: {
         large: 'string',
         small: 'string'
       },
       status: 'I\'m looking for a job like now',
       uniqueUrlName: 'string'
     },
     {
       id: 2,
       followed: true,
       name: 'Sveta',
       status: 'I am  so pretty',
       photos: {
         large: 'string',
         small: 'string',
       },
       uniqueUrlName: 'string'
     },
     {
       id: 3,
       followed: false,
       name: 'Sergei',
       status: 'I like football',
       photos: {
         large: 'string',
         small: 'string',
       },
       uniqueUrlName: 'string'
     },
     {
       id: 4,
       followed: false,
       name: 'Olia',
       status: 'I fill happy',
       photos: {
         large: 'string',
         small: 'string',
       },
       uniqueUrlName: 'string'
     },
     {
       id: 5,
       followed: false,
       name: 'Zahar',
       status: 'Go with us on station',
       photos: {
         large: 'string',
         small: 'string',
       },
       uniqueUrlName: 'string',
     },
     {
       id: 6,
       followed: true,
       name: 'Sasha',
       status: 'Hi, Dude',
       photos: {
         large: 'string',
         small: 'string',
       },
       uniqueUrlName: 'string',
     },*/
  ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isLoading: true,
  followingInProgress: []
}


export const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: action.users}
    case FOLLOW:
      return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : {...el})}//скопировать стэйт и изменить юзеров
    case UNFOLLOW:
      return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : {...el})}//скопировать стэйт и изменить юзеров
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
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID: userID}) as const //воспринимать объект как константу в TS
export const currentPageChoice = (page: number) => ({type: SET_CURRENT_PAGE, page: page}) as const
export const setUsers = (users: Array<UsersApiPropsType>) => ({type: SET_USERS, users: users}) as const
export const toggleIsLoading = (action: boolean) => ({type: TOGGLE_IS_LOADING, payload: action}) as const
export const toggleIsFollowing = (userId: number, isFetching: boolean) => ({
  type: TOGGLE_IS_FOLLOWING,
  userId,
  isFetching
}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount}) as const



// создаем санки
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<ActionType>) => {//Thunk это функция которая  делает ассинхронную работу и делает внутри кучу диспатчей
    dispatch(toggleIsLoading(true))// включаем спинер при загрузке
    usersAPI.getUsers(currentPage, pageSize)//делаем на сервер запрос о данных
        .then(data => {//делаем с данными что-то
          console.log(data.items)
          dispatch(setUsers(data.items))
          dispatch(setTotalUsersCount(data.totalCount))
          dispatch(toggleIsLoading(false))// выключаем спинер при загрузке
        })
  }
}
// создаем санки
export const getFollowThunkCreator = (id: number) => {
  return (dispatch: Dispatch<ActionType>) => {
    console.log('follow dis')
    dispatch(toggleIsFollowing(id, true))
    usersAPI.getFollow(id).then(data => {
      console.log(data.resultCode, 'FOLLOW')
      if (data.resultCode === 0) {
        dispatch(follow(id))
      }
      dispatch(toggleIsFollowing(id, false))
    })
  }
}


export const getUnFollowThunkCreator = (id: number) => {
  return (dispatch: Dispatch<ActionType>) => {
    dispatch(toggleIsFollowing(id, true))
    usersAPI.getUnfollow(id).then(data => {
      console.log('unfollow')
      if (data.resultCode === 0) {
        console.log(data.resultCode, 'UNFOLLOW')
        dispatch(follow(id))
      }
      dispatch(toggleIsFollowing(id, false))
    })
  }
}
