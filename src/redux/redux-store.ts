import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './app-reducer';
import {ActionType} from '../types/entities';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPages: dialogsReducer,
  usersPages: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer
});
export type AppStateType = ReturnType<typeof rootReducer>

// export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppThunk = ThunkAction<void, AppStateType, unknown, ActionType>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers((applyMiddleware(thunkMiddleware))))
// @ts-ignore
window.store = store; // for dev
