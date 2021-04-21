import {INITIALIZED_SUCCESS} from '../constant';
import {ActionType} from '../types/entities';
import {getAuthUserData} from './auth-reducer';
import {AppThunk} from './redux-store';


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
export const initializeApp = (): AppThunk =>
    (dispatch) => {
      const result = dispatch(getAuthUserData())
      Promise.all([result]).then(() => dispatch(initializedSuccess(true)))
    }

