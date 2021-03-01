import React from 'react';
import {ProfileAPIType, ProfilePagesType, StateType} from '../../types/entities';
import {buttonAddPost, setUserProfile, updateNewPostText} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import { withRouter } from "react-router";

export interface ProfileContainerPropsType{
  profilePage: ProfilePagesType;
  buttonAddPost: () => void
  updateNewPostText: (text: string) => void
  setUserProfile:(profile:ProfileAPIType)=> void
}

class ProfileClass extends React.Component<ProfileContainerPropsType>{

  componentDidMount() {
//@ts-ignore
    let userId = this.props.match.params.userId
    if(!userId){userId='2'}

    // this.props.toggleIsLoading(true)// включаем спинер при загрузке
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)//делаем на сервер запрос о данных
        .then(response => {//делаем с данными что-то
          // console.log(response.data)
          this.props.setUserProfile(response.data)
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

const mapStateToProps = (state: StateType) => {
  return {
    profilePage: state.profilePage
  }
}
// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//   return {
//     buttonAddPost: () => dispatch(addPostActionCreator()),
//     updateNewPostText: (text: string) => dispatch(updateNewPostTextActionCreator(text))
//   }



// @ts-ignore
const withUrlDataContainerComponent = withRouter(ProfileClass)


export default connect(mapStateToProps, {buttonAddPost, updateNewPostText,setUserProfile})(withUrlDataContainerComponent)

