import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../redux/dialogs-reducer';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../redux/profile-reducer';
import {  currentPageChoice, follow, setTotalUsersCount, setUsers, toggleIsLoading, unfollow
} from '../redux/users-reducer';

export type StoreType = {
  _state: StateType
  // _addPost: () => void
  getState: () => StateType
  subscribe: (observer: (state: StateType) => void) => void
  _callSubscriber: (i: StateType) => void
  dispatch: (action: ActionType) => void
  // _updateNewPostText: (newText: string) => void
  // _updateNewMessageText: (newText: string) => void
}


export type ProfilePagesType = {
  posts: Array<PostType>
  newPostText: string
}
export type PostType = {
  id: number
  name: string
  message: string
  likesCount: number
}
export type StateType = {
  profilePage: ProfilePagesType
  dialogsPages: DialogsPageType
  sidebar: any
}
export type DialogsPageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageText: string
}

export type MessagesType = {
  id: number
  message: string
}
export type DialogsType = {
  id: number
  name: string
}
// export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
//     {
//   type: 'UPDATE_NEW_POST_TEXT'
//   newText: string
// }

// export type AddPostActionType = ReturnType<typeof addPostActionCreator>
//     {
//   type: 'ADD_POST'
// }

export type ActionType =
    ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewMessageTextActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof currentPageChoice>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsLoading>

export type UsersApiPropsType = {
  id: number
  name: string
  followed: boolean
  photos: {
    large: any
    small: any
  }
  status: any
  uniqueUrlName: any
}
export type UsersType = {
  users: Array<UsersApiPropsType>
  pageSize:number
  totalUsersCount:number
  currentPage:number
  follow: (id: number) => void
  unfollow: (id: number) => void
  setUsers: (user: Array<UsersApiPropsType>) => void
  currentPageChoice:(page:number)=>void
  setTotalUsersCount:(count:number)=>void
  isLoading:boolean
  toggleIsLoading:(action:boolean)=>void
}
