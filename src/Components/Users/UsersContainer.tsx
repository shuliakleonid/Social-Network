import React from 'react';
import {connect} from 'react-redux';
import {
  currentPageChoice,
  follow,
  getFollowThunkCreator,
  getUnFollowThunkCreator,
  getUsersThunkCreator,
  InitialStateType,
  setTotalUsersCount,
  setUsers,
  toggleIsFollowing,
  toggleIsLoading,
  unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import {UsersType} from '../../types/entities';
import PreLoader from '../Common/PreLoader/PreLoader';
import {AppStateType} from '../../redux/redux-store';


class UsersClass extends React.Component<UsersType> {//конструктор и супер можно не писать оно происходит автоматически
// constructor(props:UsersType) {
//   super(props);
//
// }
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)


    // this.props.toggleIsLoading(true)// включаем спинер при загрузке
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)//делаем на сервер запрос о данных
    //     .then(data => {//делаем с данными что-то
    //       // console.log(response.data.items)
    //       this.props.setUsers(data.items)
    //       this.props.setTotalUsersCount(data.totalCount)
    //       this.props.toggleIsLoading(false)// выключаем спинер при загрузке
    //     })
  }

  onPageChanged = (page: number) => {
    this.props.getUsersThunkCreator(page, this.props.pageSize)
    // this.props.currentPageChoice(page)
    // this.props.toggleIsLoading(true)
    // //делаем на сервер запрос о данных
    // usersAPI.getUsers(page, this.props.pageSize).then(data => {//делаем с данными что-то
    //   this.props.setUsers(data.items)
    //   this.props.toggleIsLoading(false)
    //
    // })
  }

  render() {
    return <>
      {this.props.isLoading ? <PreLoader/> : null}
      <Users users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             pageSize={this.props.pageSize}
             onPageChanged={this.onPageChanged}
             currentPage={this.props.currentPage}
             totalUsersCount={this.props.totalUsersCount}
             getFollowThunkCreator={this.props.getFollowThunkCreator}
             getUnFollowThunkCreator={this.props.getUnFollowThunkCreator}
             toggleIsFollowing={this.props.toggleIsFollowing}
             followingInProgress={this.props.followingInProgress}

      />
    </>
  }
}


const mapStateToProps = (state: AppStateType): InitialStateType => {//принимает глобальный стэйт целиком
  return {
    users: state.usersPages.users,
    pageSize: state.usersPages.pageSize,
    totalUsersCount: state.usersPages.totalUsersCount,
    currentPage: state.usersPages.currentPage,
    isLoading: state.usersPages.isLoading,
    followingInProgress: state.usersPages.followingInProgress

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


export default connect(mapStateToProps,
    {
      follow,
      unfollow,
      setUsers,
      currentPageChoice,
      setTotalUsersCount,
      toggleIsLoading,
      toggleIsFollowing,
      getUsersThunkCreator,
      getFollowThunkCreator,
      getUnFollowThunkCreator
    })(UsersClass);
