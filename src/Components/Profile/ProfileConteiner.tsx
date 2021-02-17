import React from 'react';
import {ActionType, StateType} from '../../types/entities';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile-reducer';
import Profile from './Profile';
import StoreContext from '../../store-context';

type PropsType = {
  store: StateType;
  dispatch: (i: ActionType) => void
}

export const ProfileContainer = () => {

  // const buttonAddPost = () => {
  //   props.dispatch(addPostActionCreator())
  // }
  // const onPostsChange = (text: string) => {
  //   props.dispatch(updateNewPostTextActionCreator(text))
  // }


  return (
      <StoreContext.Consumer>
        {(store) => {
          let state = store.getState()
          const buttonAddPost = () => {
            store.dispatch(addPostActionCreator())
          }
          const onPostsChange = (text: string) => {
            store.dispatch(updateNewPostTextActionCreator(text))
          }
          return <Profile
              updateNewPostText={onPostsChange}
              buttonAddPost={buttonAddPost}
              profilePage={state.profilePage}
          />
        }}
      </StoreContext.Consumer>)
}

