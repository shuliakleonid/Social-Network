import React from 'react';
import {connect} from 'react-redux';
import {
  currentPageAC,
  followAC,
  InitialStateType,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC
} from '../../redux/users-reducer';
import {Action, Dispatch} from 'redux';
import {UsersApiPropsType} from './UsersFunction';
import axios from 'axios';
import Users from './Users';
import {UsersType} from '../../types/entities';

type StateType={
  usersPages:InitialStateType
}


class UsersClass extends React.Component<UsersType> {//конструктор и супер можно не писать оно происходит автоматически
// constructor(props:UsersType) {
//   super(props);
//
// }
  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)//делаем на сервер запрос о данных
        .then(response => {//делаем с данными что-то
          console.log(response.data.items)
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
        })
  }
  onPageChanged=(page:number)=>{
    this.props.currentPageChoice(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)//делаем на сервер запрос о данных
        .then(response => {//делаем с данными что-то
          console.log(response.data.items)
          this.props.setUsers(response.data.items)
        })
  }
  render() {
    return <Users users={this.props.users}
                  currentPage={this.props.currentPage}
                  pageSize={this.props.pageSize}
                  totalUsersCount={this.props.totalUsersCount}
                  unfollow={this.props.unfollow}
                  follow={this.props.follow}
                  onPageChanged={this.onPageChanged}
    />

  }
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersClass);
