import {SET_USER_DATA} from '../constant';
import {ActionType} from '../types/entities';


export interface initialStateType {
  id: any
  email: any
  login: any
  isAuth?: boolean
}

const initialState: initialStateType = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

const authReducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.data, isAuth: true}
    default:
      return state
  }
}
export const setAuthUserData = (data: initialStateType) => ({type: SET_USER_DATA, data}) as const

export default authReducer
