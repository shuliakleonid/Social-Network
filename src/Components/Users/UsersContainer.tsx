import React from 'react';
import {connect} from 'react-redux';
import {
  currentPageChoice,
  follow,
  InitialStateType,
  setTotalUsersCount,
  setUsers,
  toggleIsLoading,
  unfollow
} from '../../redux/users-reducer';
import axios from 'axios';
import Users from './Users';
import {UsersType} from '../../types/entities';
import PreLoader from '../Common/PreLoader/PreLoader';

type StateType = {
  usersPages: InitialStateType
}


class UsersClass extends React.Component<UsersType> {//конструктор и супер можно не писать оно происходит автоматически
// constructor(props:UsersType) {
//   super(props);
//
// }
  componentDidMount() {
    this.props.toggleIsLoading(true)// включаем спинер при загрузке
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize},`,{withCredentials:true})//делаем на сервер запрос о данных
        .then(response => {//делаем с данными что-то
          // console.log(response.data.items)
          this.props.setUsers(response.data.items)
          this.props.setTotalUsersCount(response.data.totalCount)
          this.props.toggleIsLoading(false)// выключаем спинер при загрузке

        })
  }

  onPageChanged = (page: number) => {
    this.props.currentPageChoice(page)
    this.props.toggleIsLoading(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,{withCredentials:true})//делаем на сервер запрос о данных
        .then(response => {//делаем с данными что-то
          // console.log(response.data.items)
          this.props.setUsers(response.data.items)
          this.props.toggleIsLoading(false)

        })
  }

  render() {
    return <>
      {this.props.isLoading ? <PreLoader/> : null}
      <Users users={this.props.users}
             currentPage={this.props.currentPage}
             pageSize={this.props.pageSize}
             totalUsersCount={this.props.totalUsersCount}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
             onPageChanged={this.onPageChanged}/>
    </>
  }
}


const mapStateToProps = (state: StateType) => {//принимает глобальный стэйт целиком
  return {
    users: state.usersPages.users,
    pageSize: state.usersPages.pageSize,
    totalUsersCount: state.usersPages.totalUsersCount,
    currentPage: state.usersPages.currentPage,
    isLoading: state.usersPages.isLoading
  }
}

/*const mapDispatchToProps = (dispatch: Dispatch<Action>) => {//передает дочерней компненте колбэки
  return {
    follow: (userId: number) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UsersApiPropsType>) => {
      dispatch(setUsersAC(users))
    },
    currentPageChoice: (page: number) => {
      dispatch(currentPageAC(page))
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    toggleIsLoading:(action:boolean)=>{
      dispatch(setLoadingAC(action))
    }
  }*/
// рефакторинг этого кода выглядит как
/*follow:followAC,
    unfollow:unfollowAC,
    setUsers:setUsersAC,
    currentPageChoice: currentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsLoading:setLoadingAC
    // рефактор этого кода выглядит так
    follow,
    unfollow,
    setUsers,
    currentPageChoice,
    setTotalUsersCount,
    toggleIsLoading
*/


export default connect(mapStateToProps,    {follow, unfollow, setUsers, currentPageChoice, setTotalUsersCount, toggleIsLoading})(UsersClass);
