import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware  from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  profilePage:profileReducer,
  dialogsPages:dialogsReducer,
  usersPages:usersReducer,
  sidebar:sidebarReducer,
  auth:authReducer,
  form: formReducer
});
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store; // for dev
