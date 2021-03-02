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
import Users from './Users';
import {UsersType} from '../../types/entities';
import PreLoader from '../Common/PreLoader/PreLoader';
import {usersAPI} from '../../api/api';

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
    usersAPI.getUsers(this.props.currentPage,this.props.pageSize)//делаем на сервер запрос о данных
        .then(data => {//делаем с данными что-то
          // console.log(response.data.items)
          this.props.setUsers(data.items)
          this.props.setTotalUsersCount(data.totalCount)
          this.props.toggleIsLoading(false)// выключаем спинер при загрузке
        })
  }

  onPageChanged = (page: number) => {
    this.props.currentPageChoice(page)
    this.props.toggleIsLoading(true)
    //делаем на сервер запрос о данных
    usersAPI.getUsers(page,this.props.pageSize).then(data => {//делаем с данными что-то
          this.props.setUsers(data.items)
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
