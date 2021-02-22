import React from 'react';
import {connect} from 'react-redux';
import {followAC, InitialStateType, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import Users from './Users';
import {Action, Dispatch} from 'redux';

type StateType={
  usersPages:InitialStateType
}

const mapStateToProps = (state: StateType) => {//проинимает глобальный стейт целиком
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


const usersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default usersContainer
