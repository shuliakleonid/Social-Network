import {MessagesType, PostType, StoreType} from '../types/entities';

export const ADD_POST = 'ADD_POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
export const SEND_MESSAGE = 'SEND_MESSAGE'
const store: StoreType = {
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
    dialogsPages: {
      dialogs: [
        {id: 1, name: 'Leonid'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Boris'},
        {id: 4, name: 'Olia'},
        {id: 5, name: 'Zahar'},
        {id: 6, name: 'Bob'},
      ],
      messages: [
        {id: 1, message: 'HI'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'YO'},
        {id: 4, message: 'Privet'},
        {id: 5, message: 'HI'},
        {id: 6, message: 'HI'},
      ],
      newMessageText: '',
    },
    sidebar: {}
  },
  _callSubscriber(i) {
    console.log('State was changed')
  },
  _addPost() {
    const newPost: PostType = {
      id: Date.now(),
      name: 'Anonim',
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state)
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },
  _updateNewMessageText(newText) {
    this._state.dialogsPages.newMessageText = newText;
    this._callSubscriber(this._state)
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer  //наблюдатель   патерн (AdventListener)
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost()
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText)
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._updateNewMessageText(action.newText)
    } else if (action.type === SEND_MESSAGE) {
      let newMessage: MessagesType = {
        id: Date.now(),
        message: this._state.dialogsPages.newMessageText
      }
      this._state.dialogsPages.messages.push(newMessage);
      this._state.dialogsPages.newMessageText = '';
      this._callSubscriber(this._state)
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (newText: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: newText}
) as const //воспринимать объект как константу в TS
export const addMessageActionCreator = () => ({type: SEND_MESSAGE}) as const
export const updateNewMessageTextActionCreator = (newText: string) => (
    {type: UPDATE_NEW_MESSAGE_BODY, newText: newText}
) as const //воспринимать объект как константу в TS


export default store;
//@ts-ignore
window.store = store;
//store - OOP
