import {ActionType, PostType, ProfilePagesType} from '../types/entities';
import {ADD_POST, UPDATE_NEW_POST_TEXT} from '../constant';

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
}
export const profileReducer = (state = initialState, action: ActionType): ProfilePagesType => {
  switch (action.type) {
    case ADD_POST:
      const newPost: PostType = {
        id: Date.now(),
        name: 'Anonim',
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state
    default:
      return state
  }
}

export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const updateNewPostTextActionCreator = (newText: string) => (
    {type: UPDATE_NEW_POST_TEXT, newText: newText}
) as const //воспринимать объект как константу в TS

