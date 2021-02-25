import React from 'react';
import {connect} from 'react-redux';
import {
  currentPageAC,
  followAC,
  InitialStateType,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
  UserType
} from '../../redux/users-reducer';
import Users from './UsersClass';
import {Action, Dispatch} from 'redux';
import {UsersApiPropsType} from './Users';

type StateType={
  usersPages:InitialStateType
}

const mapStateToProps = (state: StateType) => {//принимает глобальный стэйт целиком
  return {
    users: state.usersPages.users,
    pageSize:state.usersPages.pageSize,
    totalUsersCount:state.usersPages.totalUsersCount,
    currentPage:state.usersPages.currentPage
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
    setUsers: (users:Array<UsersApiPropsType>) => {
      dispatch(setUsersAC(users))
    },
    currentPageChoice: (page:number)=>{
      dispatch(currentPageAC(page))
    },
    setTotalUsersCount: (totalCount:number)=>{
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
