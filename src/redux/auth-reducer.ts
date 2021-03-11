import {SET_USER_DATA} from '../constant';
import {ActionType} from '../types/entities';
import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';


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

export const getAuthUserData = () =>(dispatch:Dispatch)=>{
  usersAPI.getAuthentication()
      .then((data) => {
        if (data.resultCode === 0) {
          const {id, email, login} = data.data
          dispatch(setAuthUserData({id, email, login}))
        }
      })
}
export default authReducer
