import {ActionType, PostType, ProfilePagesType} from '../types/entities';
import {ADD_POST, UPDATE_NEW_POST_TEXT} from '../constant';

export const profileReducer = (state: ProfilePagesType, action: ActionType): ProfilePagesType => {
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

