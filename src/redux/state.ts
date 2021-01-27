import {PostType} from '../types/entities';

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, name: 'Leonid', message: 'Hi, my name is Leonid', likesCount: 12},
        {id: 2, name: 'Sveta', message: 'Hi, i am a student', likesCount: 5},
        {id: 3, name: 'Boris', message: 'Hi, I speak English', likesCount: 34},
        {id: 4, name: 'Olia', message: 'Hi, I have got a dog', likesCount: 9},
        {id: 5, name: 'Zahar', message: 'Hi, I like ice-cream', likesCount: 11},
        {id: 6, name: 'Bob', message: 'Hi, Dude', likesCount: 11},
      ],
      newPostText: '',
    },
    dialogPage: {},
    sidebar: {}
  },
  _callSubscriber(i:any) {
    console.log('State was changed')
  },
  getState (){
    return this._state;
  },
  subscribe(observer: any) {
    this._callSubscriber = observer  //наблюдатель   патерн (AdventListener)
  },
  _addPost() {
    const newPost:PostType = {
      id: Date.now(),
      name: 'Anonim',
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state)
  },
  _updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },
  dispatch(action: ActionType ){
    if (action.type === 'ADD-POST') {
      this._addPost()
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText)
    }
  }
}

type UpdateNewPostTextActionType = {
  type: 'UPDATE-NEW-POST-TEXT'
  newText: string
}

type AddPostActionType = {
  type: 'ADD-POST'
}

export type ActionType = UpdateNewPostTextActionType | AddPostActionType


export default store;
//@ts-ignore
window.store = store;
//store - OOP
