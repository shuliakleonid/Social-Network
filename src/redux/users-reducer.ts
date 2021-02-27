import {ActionType} from '../types/entities';
import {FOLLOW, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS, TOGGLE_IS_LOADING, UNFOLLOW} from '../constant';
import {UsersApiPropsType} from '../Components/Users/UsersFunction';

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
  isLoading:boolean
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
    default:
      return state

  }
}

export const follow = (userID: number) => ({type: FOLLOW, userID: userID}) as const
export const currentPageChoice = (page: number) => ({type: SET_CURRENT_PAGE, page: page}) as const
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID: userID}) as const //воспринимать объект как константу в TS
export const setUsers = (users: Array<UsersApiPropsType>) => ({type: SET_USERS, users: users}) as const
export const toggleIsLoading = (action: boolean) => ({type: TOGGLE_IS_LOADING, payload: action}) as const
export const setTotalUsersCount = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, count: totalCount}) as const

