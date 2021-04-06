import {SET_USER_DATA} from '../constant';
import {ActionType} from '../types/entities';
import {authAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk';
import {stopSubmit} from 'redux-form';

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

export const getAuthUserData = (): ThunkAction<void, InitialStateTypeAuthReducer, unknown, ActionType> =>
    (dispatch) => {
 return authAPI.me()
      .then((data) => {
        if (data.resultCode === 0) {
          const {id, email, login} = data.data
          const isAuth = true
          dispatch(setAuthUserData({id, email, login, isAuth}))
        }
      })
}

export const login = ({
                        email,
                        password,
                        rememberMe
                      }: loginType): ThunkAction<void, InitialStateTypeAuthReducer, unknown, ActionType> => (dispatch) => {

  authAPI.login(email, password, rememberMe)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(getAuthUserData())
        }else {
          console.log(data)
          const message = data.messages.length > 0 ? data.messages[0]:'Some error'
          dispatch(stopSubmit('login',{_error:message}))
        }
      })
}

export const logOut = (): ThunkAction<void, InitialStateTypeAuthReducer, unknown, ActionType> => (dispatch) => {
  authAPI.logOut()
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(setAuthUserData({id: 0, email: 'null', login: 'Please Login', isAuth: false}))
        }
      })
}
export default authReducer
