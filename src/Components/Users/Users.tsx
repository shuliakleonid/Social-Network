import React, {FunctionComponent} from 'react';
import style from './Users.module.css';
import user from '../../assets/icons/user.png';
import {UsersApiPropsType} from './UsersFunction';
import {v1} from 'uuid';
import {NavLink} from 'react-router-dom';
import {usersAPI} from '../../api/api';

type UsersTypeProps = {
  users: Array<UsersApiPropsType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  follow: (id: number) => void
  unfollow: (id: number) => void
  onPageChanged: (page: number) => void
  followingInProgress: Array<number>
  toggleIsFollowing: (id: number,isFetching:boolean) => void
}
const Users: FunctionComponent<UsersTypeProps> = (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
      <div>
        <div>
          {
            pages.map(el => <span key={v1()} onClick={() => props.onPageChanged(el)}
                                  className={props.currentPage === el
                                      ? style.pageNumber
                                      : ''}>{el}--</span>)
          }
        </div>
        {
          props.users.map(el => <div key={el.id}>
            <span>
              <div>
                <NavLink to={`/profile/${el.id}`}>
                <img alt='img' src={el.photos.small != null ? el.photos.small : user}
                     className={style.photoUser}/></NavLink>
              </div>
              <div>
                {el.followed
                    ? <button

                        disabled={props.followingInProgress.some(id => id === el.id)}
                        onClick={() => {
                       //дизайблем кнопку пока не подгрузились данные
                          props.toggleIsFollowing(el.id,true)
                          usersAPI.getUnfollow(el.id).then(data => {//делаем с данными что-то
                            if (data.resultCode === 0) {
                              props.unfollow(el.id)
                            }
                         //делаем кнопку активной после загрузки данных
                            props.toggleIsFollowing(el.id,false)
                          })
                        }}>Unfollow</button>
                    : <button disabled={props.followingInProgress.some(id => id === el.id)}
                              onClick={() => {
                                props.toggleIsFollowing(el.id,true)
                                usersAPI.getFollow(el.id).then(data => {
                                  if (data.resultCode === 0) {
                                    props.follow(el.id)
                                  }
                                  props.toggleIsFollowing(el.id,false)
                                })
                              }}>Follow</button>}
                </div>
              </span>
            <span>
              <span>
                <div>{el.name}</div>
                 <div>{el.status}</div>
              </span>
              <span>
                <div>{'el.location.country '}</div>
                <div>{'el.location.city'}</div>
              </span>
            </span>
          </div>)
        }
      </div>
  );
};

export default Users;
