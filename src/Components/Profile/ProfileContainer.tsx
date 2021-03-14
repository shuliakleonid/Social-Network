import React from 'react';
import {ProfileAPIType, ProfilePagesType} from '../../types/entities';
import {buttonAddPost, getUserProfile, updateNewPostText} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import Profile from './Profile';
import {RouteComponentProps, withRouter} from 'react-router';
import {AppStateType} from '../../redux/redux-store';
import {InitialStateTypeAuthReducer} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';

type MatchStateDispatchToProps={
  profilePage:ProfilePagesType
  isAuth:boolean
}

type PathParamsType = {
      userId:string
}
export interface ProfileContainerPropsType extends  RouteComponentProps<PathParamsType>  {
  profilePage: ProfilePagesType;
  buttonAddPost: () => void
  updateNewPostText: (text: string) => void
  // setUserProfile:(profile:ProfileAPIType)=> void
  getUserProfile:(userId:string)=>void
  isAuth:boolean
}

class ProfileClass extends React.Component<ProfileContainerPropsType>{

  componentDidMount() {

    let userId = this.props.match.params.userId
    this.props.getUserProfile(userId)
  }



  render() {

     if (!this.props.isAuth) return <Redirect to={'/login'}/>

    return <Profile {...this.props} />
}
}

// type PropsType = {
//   store: StateType;
//   dispatch: (i: ActionType) => void
// }
//
// export const ProfileContainer = () => {
//
//   const buttonAddPost = () => {
//     props.dispatch(addPostActionCreator())
//   }
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

const mapStateToProps = (state: AppStateType):MatchStateDispatchToProps => {
  return {
    profilePage: state.profilePage,
    isAuth: state.auth.isAuth
  }
}
// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//   return {
//     buttonAddPost: () => dispatch(addPostActionCreator()),
//     updateNewPostText: (text: string) => dispatch(updateNewPostTextActionCreator(text))
//   }

const withUrlDataContainerComponent = withRouter(ProfileClass)

export default connect(mapStateToProps, {getUserProfile,buttonAddPost,updateNewPostText})(withUrlDataContainerComponent)

