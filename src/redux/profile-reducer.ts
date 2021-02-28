import {ActionType, PostType, ProfileAPIType, ProfilePagesType} from '../types/entities';
import {ADD_POST, SET_USERS_PROFILE, UPDATE_NEW_POST_TEXT} from '../constant';

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
  profile:{
    aboutMe: "я круто чувак 1001%",
    contacts: {
      facebook: "facebook.com",
      website: null,
      vk: "vk.com/dimych",
      twitter: "https://twitter.com/@sdf",
      instagram: "instagra.com/sds",
      youtube: null,
      github: "github.com",
      mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: "не ищу, а дурачусь",
    fullName: "samurai dimych",
    userId: 2,
    photos: {
      small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
      large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    }
  }

}
export const profileReducer = (state = initialState, action: ActionType): ProfilePagesType => {
  switch (action.type) {
    case ADD_POST: {
      const newPost: PostType = {
        id: Date.now(),
        name: 'Anonim',
        message: state.newPostText,
        likesCount: Math.floor(Math.random() * 10) * Math.floor(Math.random() * 10)
      };
      return {...state, posts: [...state.posts, newPost], newPostText: ''}
    }
    case UPDATE_NEW_POST_TEXT:
      return {...state, newPostText: action.newText}
    case SET_USERS_PROFILE:
      return {...state, profile:action.profile}
    default:
      return state

  }
}

export const buttonAddPost = () => ({type: ADD_POST}) as const
export const updateNewPostText = (newText: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: newText}
) as const //воспринимать объект как константу в TS
export const setUserProfile = (profile: ProfileAPIType) => ({type: SET_USERS_PROFILE, profile}) as const

