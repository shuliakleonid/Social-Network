import React from 'react';
import {ActionType, StateType} from '../../types/entities';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile-reducer';
import Profile from './Profile';

type PropsType = {
  store: StateType;
  dispatch:(i:ActionType)=>void
}

 export const ProfileContainer = (props: PropsType) => {
debugger
  const buttonAddPost = () => {
    props.dispatch(addPostActionCreator())
  }
  const onPostsChange = (text: string) => {
    props.dispatch(updateNewPostTextActionCreator(text))
  }


  return <Profile updateNewPostText={onPostsChange}
                  buttonAddPost={buttonAddPost}
                  profilePage={props.store.profilePage}/>
}

