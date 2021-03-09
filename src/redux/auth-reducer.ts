import {SET_USER_DATA} from '../constant';
import {ActionType} from '../types/entities';


export interface DataStateType {
  id: number
  email: string
  login: string
}


const initialState = {
  id: 1,
  email:'1',
  login: '1',
  isAuth: false
}

type InitialStateTypeAuthReducer = typeof initialState
const authReducer = (state:InitialStateTypeAuthReducer = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.data, isAuth: true}
    default:
      return state
  }
}
export const setAuthUserData = (data: DataStateType) => ({type: SET_USER_DATA, data}) as const

export default authReducer
