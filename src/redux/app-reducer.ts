import {INITIALIZED_SUCCESS} from '../constant';
import {ActionType} from '../types/entities';
import {ThunkAction} from 'redux-thunk';
import {getAuthUserData, InitialStateTypeAuthReducer} from './auth-reducer';


const initialState = {
  initialized: false
}

export type InitialStateTypeAppReducer = typeof initialState
export const appReducer = (state: InitialStateTypeAppReducer = initialState, action: ActionType) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {...state, ...action.payload}
    default:
      return state
  }
}
export const initializedSuccess = (initialized: boolean) => ({
  type: INITIALIZED_SUCCESS,
  payload: {initialized}
}) as const
export const initializeApp = (): ThunkAction<void, InitialStateTypeAuthReducer, unknown, ActionType> =>
   (dispatch) => {
   const result =  dispatch(getAuthUserData())
   Promise.all([result]).then(()=>dispatch(initializedSuccess(true)))
  }

