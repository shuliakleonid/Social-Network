import React, {FunctionComponent} from 'react';
import {UserDataType} from '../../api/api';
import Paginator from '../../Components/paginator/Paginator';
import User from './User';

type UsersTypeProps = {
  users: Array<UserDataType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (id: number) => void
  unfollow: (id: number) => void
  onPageChanged: (page: number) => void
  followingInProgress: Array<number>
  toggleIsFollowing: (id: number, isFetching: boolean) => void
  getFollowThunkCreator: (id: number) => void
  getUnFollowThunkCreator: (id: number) => void
}
const Users: FunctionComponent<UsersTypeProps> = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
      <div>
        <Paginator portionSize={10}/>
        {props.users.map(el => <User key={el.id} user={el} followingInProgress={props.followingInProgress}/>)}
        {/*<div>*/}
        {/*  {*/}
        {/*    pages.map(el => <span key={v1()} onClick={() => props.onPageChanged(el)}*/}
        {/*                          className={props.currentPage === el*/}
        {/*                              ? style.pageNumber*/}
        {/*                              : ''}>{el}--</span>)*/}
        {/*  }*/}
        {/*</div>*/}
        {
          //     <div key={el.id}>
          //   <span>
          //     <div>
          //       <NavLink to={`/profile/${el.id}`}>
          //       <img alt='img' src={el.photos.small != null ? el.photos.small : user}
          //            className={style.photoUser}/></NavLink>
          //     </div>
          //     <div>
          //       {el.followed
          //           ? <button
          //
          //               disabled={props.followingInProgress.some(id => id === el.id)}//если в массиве есть id пользователя то возвращает true
          //               onClick={() => props.getUnFollowThunkCreator(el.id)                        //   //дизайблем кнопку пока не подгрузились данные
          //
          //               }>Unfollow</button>
          //           : <button disabled={props.followingInProgress.some(id => id === el.id)}
          //                     onClick={() => {
          //                       return props.getFollowThunkCreator(el.id)
          //                     }
          //                     }>Follow</button>}
          //       </div>
          //
          //     </span>
          //   <span>
          //     <span>
          //       <div>{el.name}</div>
          //        <div>{el.status}</div>
          //     </span>
          //     <span>
          //       <div>{'el.location.country '}</div>
          //       <div>{'el.location.city'}</div>
          //     </span>
          //   </span>
          // </div>)
        }
      </div>
  )
}

export default Users;
