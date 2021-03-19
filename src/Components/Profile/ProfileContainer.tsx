import React from 'react';
import {ProfilePagesType} from '../../types/entities';
import {
  buttonAddPost,
  getUserProfile,
  getUserStatus,
  updateNewPostText,
  updateStatus
} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import Profile from './Profile';
import {RouteComponentProps, withRouter} from 'react-router';
import {AppStateType} from '../../redux/redux-store';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type MatchStateDispatchToProps={
  profilePage:ProfilePagesType
  // isAuth:boolean
}

type PathParamsType = {
      userId:string
}
export interface ProfileContainerPropsType extends  RouteComponentProps<PathParamsType>  {
  profilePage: ProfilePagesType;
  buttonAddPost: () => void
  updateNewPostText: (text: string) => void
  getUserProfile:(userId:string)=>void
  getUserStatus:(userId:string)=>void
  updateStatus:(userId:string)=>void
  isAuth:boolean
}

class ProfileClass extends React.Component<ProfileContainerPropsType>{

  componentDidMount() {
    let userId = this.props.match.params.userId
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }
  render() {
    return <Profile {...this.props}  />
}
}



const mapStateToProps = (state: AppStateType):MatchStateDispatchToProps => {
  return {
    profilePage: state.profilePage
    // status: state.profilePage.status
  }
}
// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//   return {
//     buttonAddPost: () => dispatch(addPostActionCreator()),
//     updateNewPostText: (text: string) => dispatch(updateNewPostTextActionCreator(text))
//   }


export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile,buttonAddPost,updateNewPostText,getUserStatus,updateStatus}),withRouter,withAuthRedirect)(ProfileClass)//позволяет сделать последовательные вызовы функций compose(3),2,1)(старт)
// const withUrlDataContainerComponent = withRouter(ProfileClass)
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile,buttonAddPost,updateNewPostText})(withUrlDataContainerComponent))
