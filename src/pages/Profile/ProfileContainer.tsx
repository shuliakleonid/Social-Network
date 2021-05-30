import React from 'react';
import {ProfilePagesType} from '../../types/entities';
import {buttonAddPost, getUserProfile, getUserStatus, updateStatus} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import Profile from './Profile';
import {RouteComponentProps, withRouter} from 'react-router';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';

type MatchStateDispatchToProps = {
  profilePage: ProfilePagesType
  authorisedUserId:number
  isAuth:boolean
}

type PathParamsType = {
  userId: string
}

export interface ProfileContainerPropsType extends RouteComponentProps<PathParamsType> {
  profilePage: ProfilePagesType;
  buttonAddPost: (text: string) => void
  getUserProfile: (userId: string) => void
  getUserStatus: (userId: string) => void
  updateStatus: (userId: string) => void
  authorisedUserId:number
  isAuth: boolean
}

class ProfileClass extends React.Component<ProfileContainerPropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = String(this.props.authorisedUserId)
      if(!userId){
        this.props.history.push('/login')
      }
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return <Profile {...this.props}  />
  }
}

const mapStateToProps = (state: AppStateType): MatchStateDispatchToProps => {
  return {
    profilePage: state.profilePage,
    authorisedUserId: state.auth.id,
    isAuth:state.auth.isAuth
  }
}


export default compose<React.ComponentType>(connect(mapStateToProps, {
  getUserProfile,
  buttonAddPost,
  getUserStatus,
  updateStatus
}), withRouter,)(ProfileClass)//позволяет сделать последовательные вызовы функций compose(3),2,1)(старт)
// const withUrlDataContainerComponent = withRouter(ProfileClass)
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile,buttonAddPost,updateNewPostText})(withUrlDataContainerComponent))
