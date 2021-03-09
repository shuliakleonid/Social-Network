import React from 'react';
import {ProfileAPIType, ProfilePagesType, StateType} from '../../types/entities';
import {buttonAddPost, setUserProfile, updateNewPostText} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import Profile from './Profile';
import {withRouter} from 'react-router';
import {usersAPI} from '../../api/api';
import {RouteComponentProps} from "react-router";
import {AppStateType} from '../../redux/redux-store';

type MatchStateDispatchToProps={
  profilePage:ProfilePagesType
}

type PathParamsType = {
      userId:string
}
export interface ProfileContainerPropsType extends  RouteComponentProps<PathParamsType>  {
  profilePage: ProfilePagesType;
  buttonAddPost: () => void
  updateNewPostText: (text: string) => void
  setUserProfile:(profile:ProfileAPIType)=> void
}

class ProfileClass extends React.Component<ProfileContainerPropsType>{

  componentDidMount() {
    let userId = this.props.match.params.userId
    // this.props.toggleIsLoading(true)// включаем спинер при загрузке
    usersAPI.getProfile(userId)//делаем на сервер запрос о данных
        .then(data => {//делаем с данными что-то
          this.props.setUserProfile(data)
          // this.props.toggleIsLoading(false)// выключаем спинер при загрузке
        })
  }
  render() {
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

const mapStateToProps = (state: AppStateType):MatchStateDispatchToProps => {
  return {
    profilePage: state.profilePage
  }
}
// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//   return {
//     buttonAddPost: () => dispatch(addPostActionCreator()),
//     updateNewPostText: (text: string) => dispatch(updateNewPostTextActionCreator(text))
//   }

const withUrlDataContainerComponent = withRouter(ProfileClass)

export default connect(mapStateToProps, {buttonAddPost, updateNewPostText,setUserProfile})(withUrlDataContainerComponent)

