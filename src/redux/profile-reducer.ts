import {ActionType, PostType, ProfileAPIType, ProfilePagesType} from '../types/entities';
import {
  ADD_POST,
  DELETE_POST,
  SAVE_USER_PHOTO,
  SET_UPDATE_USER_STATUS,
  SET_USER_STATUS,
  SET_USERS_PROFILE
} from '../constant';
import {profileAPI, usersAPI} from '../api/api';
import {Dispatch} from 'redux';

const initialState: ProfilePagesType = {
  posts: [
    {id: 1, name: 'Leonid', message: 'Hi, my name is Leonid', likesCount: 12},
    {id: 2, name: 'Sveta', message: 'Hi, i am a student', likesCount: 5},
    {id: 3, name: 'Boris', message: 'Hi, I speak English', likesCount: 34},
    {id: 4, name: 'Olia', message: 'Hi, I have got a dog', likesCount: 9},
    {id: 5, name: 'Zahar', message: 'Hi, I like ice-cream', likesCount: 11},
    {id: 6, name: 'Bob', message: 'Hi, Dude', likesCount: 11},
  ],
  newPostText: '',
  profile: {
    aboutMe: 'я круто чувак 1001%',
    contacts: {
      facebook: 'facebook.com',
      website: null,
      vk: 'vk.com/dimych',
      twitter: 'https://twitter.com/@sdf',
      instagram: 'instagra.com/sds',
      youtube: null,
      github: 'github.com',
      mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: 'не ищу, а дурачусь',
    fullName: 'samurai dimych',
    userId: 2,
    photos: {
      small: 'https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0',
      large: 'https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0'
    }
  },
  status: ''
}
export const profileReducer = (state = initialState, action: ActionType): ProfilePagesType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostType = {
        id: Date.now(),
        name: 'Anonim',
        message: action.text,
        likesCount: Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10)
      };
      return {...state, posts: [...state.posts, newPost],}
    }
      // case UPDATE_NEW_POST_TEXT:
      //   return {...state, newPostText: action.newText}
    case SET_USERS_PROFILE:
      return {...state, profile: action.profile}
    case SET_USER_STATUS:
      return {...state, status: action.status}
    case SET_UPDATE_USER_STATUS:
      return {...state, status: action.status}
    case DELETE_POST:
      return {...state, posts: state.posts.filter(post => post.id !== action.id)}
    case SAVE_USER_PHOTO:
      return {...state, profile: {...state.profile, photos: action.photos}}
    default:
      return state

  }
}

export const buttonAddPost = (text: string) => ({type: ADD_POST, text}) as const
export const deletePost = (id: number) => ({type: DELETE_POST, id}) as const
// export const updateNewPostText = (newText: string) => (
//     {type: UPDATE_NEW_POST_TEXT, newText: newText}
// ) as const //воспринимать объект как константу в TS
export const setUserProfile = (profile: ProfileAPIType) => ({type: SET_USERS_PROFILE, profile}) as const
export const setUserStatus = (status: string) => ({type: SET_USER_STATUS, status}) as const
export const setUpdateStatus = (status: string) => ({type: SET_UPDATE_USER_STATUS, status}) as const
export const savePhotoSuccess = (photos: {small:string,large:string}) => ({type: SAVE_USER_PHOTO, photos}) as const


export const getUserProfile = (userId: string) => (dispatch: Dispatch<ActionType>) => {
  usersAPI.getProfile(userId)//делаем на сервер запрос о данных
      .then(data => {//делаем с данными что-то
        console.log(data)
        dispatch(setUserProfile(data))
      })
}
export const getUserStatus = (userId: string) => (dispatch: Dispatch<ActionType>) => {
  profileAPI.getStatus(userId)//делаем на сервер запрос о данных
      .then(data => {//делаем с данными что-то
        debugger
        dispatch(setUserStatus(data))
      })
}

export const updateStatus = (status: string) => (dispatch: Dispatch<ActionType>) => {
  profileAPI.updateStatus(status)//делаем на сервер запрос о данных
      .then(data => {
        console.log(data.resultCode, 'data.resultCode')
        if (data.resultCode === 0) {
          dispatch(setUpdateStatus(status))
        }
      })
}
export const savePhoto = (photo: any) => (dispatch: Dispatch<ActionType>) => {
  profileAPI.savePhoto(photo)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(savePhotoSuccess(data.data.photos))
        }
      })
}

