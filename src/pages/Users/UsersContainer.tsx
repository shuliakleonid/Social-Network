import React from 'react';
import {connect} from 'react-redux';
import {
  currentPageChoice,
  follow,
  getFollowThunkCreator,
  getUnFollowThunkCreator,
  requestUsers,
  UsersStateType,
  toggleIsFollowing,
  unfollow
} from '../../redux/users-reducer';
import Users from './Users';
import {UsersType} from '../../types/entities';
import PreLoader from '../../Components/Common/PreLoader/PreLoader';
import {AppStateType} from '../../redux/redux-store';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsLoading,
  getPageSize,
  getTotalUsersCount,
   getUsersSuperSelector
} from '../../redux/users-selectors';


class UsersClass extends React.Component<UsersType> {//конструктор и супер можно не писать оно происходит автоматически

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)

  }

  onPageChanged = (page: number) => {
    this.props.getUsersThunkCreator(page, this.props.pageSize)

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


const mapStateToProps = (state: AppStateType): UsersStateType => {//принимает глобальный стэйт целиком
  return {
    users:getUsersSuperSelector(state) ,
    // users:getUsers(state) ,
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default connect(mapStateToProps,
    {
      follow,
      unfollow,
      currentPageChoice,
      toggleIsFollowing,
      getUsersThunkCreator: requestUsers,
      getFollowThunkCreator,
      getUnFollowThunkCreator
    })(UsersClass);
