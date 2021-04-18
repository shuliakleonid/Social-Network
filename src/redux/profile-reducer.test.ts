import {buttonAddPost, deletePost, profileReducer} from './profile-reducer';
import {ProfilePagesType} from '../types/entities';


it('new poet should be added ', () => {
  // 1. TEST DATA
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

  const action = buttonAddPost('Leonid')

  //2.action
  const newState = profileReducer(initialState, action)

  // 3. expectation
  expect(newState.posts.length).toBe(7)
  expect(newState.posts[6].message).toBe('Leonid')
})

it('after deleting length of messages should be decrement',()=>{
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
  const action = deletePost(2)

  const newState = profileReducer(initialState, action)


  expect(newState.posts.length).toBe(5)
})

it('after deleting length shouldn"t be decrement if id is incorrect',()=>{
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
  const action = deletePost(1000)

  const newState = profileReducer(initialState, action)


  expect(newState.posts.length).toBe(6)
})
