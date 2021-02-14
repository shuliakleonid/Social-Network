import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../redux/dialogs-reducer';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../redux/profile-reducer';

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

export type PostType = {
  id: number
  name: string
  message: string
  likesCount: number
}

export type ProfilePagesType = {
  posts: Array<PostType>
  newPostText: string
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

