import React from 'react';
import {connect} from 'react-redux';
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import Users from './UsersClass';
import {Action, Dispatch} from 'redux';

type StateType={
  usersPages:InitialStateType
}

const mapStateToProps = (state: StateType) => {//принимает глобальный стэйт целиком
  return {
    users: state.usersPages.users
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {//передает дочерней компненте колбэки
  return {
    follow: (userId:number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId:number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users:Array<UserType>) => {
      dispatch(setUsersAC(users))
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
