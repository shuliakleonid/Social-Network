import {ActionType} from '../types/entities';
import {FOLLOW, SET_USERS, UNFOLLOW} from '../constant';
import user from '../assets/icons/user.png'
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
  users: Array<UserType>
}

const initialState: InitialStateType = {
  users: [
    {
      id: 1,
      photoUrl: user,
      followed: true,
      name: 'Dmitry',
      status: 'I\'m looking for a job like now',
      location: {city: 'Minsk', country: 'Belarus'}
    },
    {
      id: 2,
      photoUrl: user,
      followed: true,
      name: 'Sveta',
      status: 'I am  so pretty',
      location: {city: 'Moscow', country: 'Russia'}
    },
    {
      id: 3,
      photoUrl: user,
      followed: false,
      name: 'Sergei',
      status: 'I like football',
      location: {city: 'Kiev', country: 'Ukraine'}
    },
    {
      id: 4,
      photoUrl: user,
      followed: false,
      name: 'Olia',
      status: 'I fill happy',
      location: {city: 'Warshaw', country: 'Poland'}
    },
    {
      id: 5,
      photoUrl: user,
      followed: false,
      name: 'Zahar',
      status: 'Go with us on station',
      location: {city: 'Berlin', country: 'Germani'}
    },
    {
      id: 6,
      photoUrl: user,
       followed: true,
      name: 'Sasha',
      status: 'Hi, Dude',
      location: {city: 'Paris', country: 'France'}
    },
  ],
}

export const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case SET_USERS:
      return {...state, users: [...state.users, ...action.users]}
    case FOLLOW:
      return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: true} : {...el})}//скопировать стэйт и изменить юзеров
    case UNFOLLOW:
      return {...state, users: state.users.map(el => el.id === action.userID ? {...el, followed: false} : {...el})}//скопировать стэйт и изменить юзеров

    default:
      return state

  }
}

export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users}) as const
export const followAC = (userID: number) => ({type: FOLLOW, userID: userID}) as const
export const unfollowAC = (userID: number) => (
    {type: UNFOLLOW, userID: userID}
) as const //воспринимать объект как константу в TS

