import {addPostActionCreator, updateNewPostTextActionCreator} from '../redux/state'

export type StoreType = {
  _state: StateType
  _addPost: () => void
  getState: () => StateType
  subscribe: (observer: (state: StateType) => void) => void
  _callSubscriber: (i: StateType) => void
  dispatch: (action: ActionType) => void
  _updateNewPostText: (newText: string) => void
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
  dialogPage: any
  sidebar: any
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

export type ActionType = ReturnType<typeof updateNewPostTextActionCreator> | ReturnType<typeof addPostActionCreator>

