import React from 'react';
import {ActionType, StateType} from '../../types/entities';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import Dialogs from '../Dialogs/Dialogs';
import Profile from './Profile';
import {Action, Dispatch} from 'redux';

// type PropsType = {
//   store: StateType;
//   dispatch: (i: ActionType) => void
// }
//
// export const ProfileContainer = () => {
//
//   // const buttonAddPost = () => {
//   //   props.dispatch(addPostActionCreator())
//   // }
//   // const onPostsChange = (text: string) => {
//   //   props.dispatch(updateNewPostTextActionCreator(text))
//   // }
//
//
//   return (
//       <StoreContext.Consumer>
//         {(store) => {
//           let state = store.getState()
//           const buttonAddPost = () => {
//             store.dispatch(addPostActionCreator())
//           }
//           const onPostsChange = (text: string) => {
//             store.dispatch(updateNewPostTextActionCreator(text))
//           }
//           return <Profile
//               updateNewPostText={onPostsChange}
//               buttonAddPost={buttonAddPost}
//               profilePage={state.profilePage}
//           />
//         }}
//       </StoreContext.Consumer>)
// }

const mapStateToProps = (state: StateType) => {
  return {
    profilePage: state.profilePage
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    buttonAddPost: () => dispatch(addPostActionCreator()),
    updateNewPostText: (text: string) => dispatch(updateNewPostTextActionCreator(text))
  }
}
export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

