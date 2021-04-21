import {SET_USER_DATA} from '../constant';
import {ActionType} from '../types/entities';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';
import {AppThunk} from './redux-store';

export interface DataStateType {
  id: number
  email: string
  login: string
  isAuth: boolean
}

export type loginType = {
  email: string
  password: string
  rememberMe: boolean
}

const initialState: DataStateType = {
  id: 1,
  email: '1',
  login: '1',
  isAuth: false
}

export type InitialStateTypeAuthReducer = typeof initialState
const authReducer = (state: InitialStateTypeAuthReducer = initialState, action: ActionType) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {...state, ...action.payload}
    default:
      return state
  }
}
export const setAuthUserData = (payload: DataStateType) => ({type: SET_USER_DATA, payload}) as const

export const getAuthUserData = (): AppThunk =>
    async (dispatch) => {
      const userData = await authAPI.me();
      try {
        if (userData.resultCode === 0) {
          const {id, email, login} = userData.data
          const isAuth = true
          dispatch(setAuthUserData({id, email, login, isAuth}))
        }
      } catch (e) {
        console.warn(e)
      }
    }

export const login = ({email, password, rememberMe}: loginType): AppThunk =>
    async (dispatch) => {
try{
  const loginData = await authAPI.login(email, password, rememberMe)
  if(loginData.resultCode===0){
    dispatch(getAuthUserData())
  }else {
    const message = loginData.messages.length > 0 ? loginData.messages[0] : 'Some error'
    dispatch(stopSubmit('login', {_error: message}))
  }
}catch (e) {
  console.warn(e)
}
    }

export const logOut = (): AppThunk =>
    async(dispatch) => {
  try {
 const loginData=  await authAPI.logOut()
    if (loginData.resultCode === 0) {
      dispatch(setAuthUserData({id: 0, email: 'null', login: 'Please Login', isAuth: false}))
    }
  }catch (e) {
    console.warn(e)
  }
}
export default authReducer
