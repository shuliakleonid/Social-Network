import {combineReducers, createStore} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';
import {usersReducer} from './news-reducer';

const reducers = combineReducers({
  profilePage:profileReducer,
  dialogsPages:dialogsReducer,
  usersPages:usersReducer,
  sidebar:sidebarReducer,
});


export const store = createStore(reducers);
