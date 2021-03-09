import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware  from 'redux-thunk'

const rootReducer = combineReducers({
  profilePage:profileReducer,
  dialogsPages:dialogsReducer,
  usersPages:usersReducer,
  sidebar:sidebarReducer,
  auth:authReducer,
});
export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));
