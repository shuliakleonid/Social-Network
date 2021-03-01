import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './users-reducer';
import authReducer from './auth-reducer';

const reducers = combineReducers({
  profilePage:profileReducer,
  dialogsPages:dialogsReducer,
  usersPages:usersReducer,
  sidebar:sidebarReducer,
  auth:authReducer,
});


export const store = createStore(reducers);
