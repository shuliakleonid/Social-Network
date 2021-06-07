import {addMessageActionCreator} from '../redux/dialogs-reducer';
import {
  buttonAddPost, deletePost, savePhotoSuccess,
  setUpdateStatus,
  setUserProfile,
  setUserStatus,
} from '../redux/profile-reducer';
import {
  currentPageChoice,
  follow,
  setTotalUsersCount,
  setUsers,
  toggleIsFollowing,
  toggleIsLoading,
  unfollow
} from '../redux/users-reducer';
import {setAuthUserData} from '../redux/auth-reducer';
import {initializedSuccess} from '../redux/app-reducer';
import {UserDataType} from '../api/api';

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
  profile: ProfileAPIType
  status: string
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
  users: Array<UserDataType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (id: number) => void
  unfollow: (id: number) => void
  // setUsers: (user: Array<UsersApiPropsType>) => void
  currentPageChoice: (page: number) => void
  // setTotalUsersCount: (count: number) => void
  isLoading: boolean
  followingInProgress: Array<number>
  // toggleIsLoading: (action: boolean) => void
  toggleIsFollowing: (id: number, isFetching: boolean) => void
  getUsersThunkCreator: (page: number, pageSize: number) => void
  getFollowThunkCreator: (id: number) => void
  getUnFollowThunkCreator: (id: number) => void
}
export type ProfileAPIType = {
  aboutMe: string
  contacts: ContactsType,
  lookingForAJob: true
  lookingForAJobDescription: string
  fullName: string
  userId: number
  photos: {
    small: string
    large: string
  }
}

export type ContactsType = {
  facebook: string
  website: string
  vk: string
  twitter: string
  instagram: string
  youtube: string
  github: string
  mainLink: string
}
export type ActionType =
      ReturnType<typeof buttonAddPost>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof currentPageChoice>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsLoading>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof toggleIsFollowing>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setUpdateStatus>
    | ReturnType<typeof initializedSuccess>
    | ReturnType<typeof deletePost>
    | ReturnType<typeof savePhotoSuccess>
