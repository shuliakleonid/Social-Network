import React from 'react';
import {UserType} from '../../redux/news-reducer';
import style from './Users.module.css'

type UsersPropsType = {
  users: Array<UserType>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
}

const Users = (props: UsersPropsType) => {
  const followButton = (id: number) => {
    props.follow(id)
  }
  const unFollowButton = (id: number) => {
    props.unfollow(id)
  }

  return (
      <div>
        {
          props.users.map(el => <div key={el.id}>
            <span>
              <div><img src={el.photoUrl} className={style.photoUser}/></div>
              <div>
                {el.followed
                    ? <button onClick={() => {unFollowButton(el.id)}}>Unfollow</button>
                    : <button onClick={() => {followButton(el.id)}}>Follow</button>}
                </div>
              </span>
            <span>
              <span>
                <div>{el.name}</div>
                 <div>{el.status}</div>
              </span>
              <span>
                <div>{el.location.country}</div>
                <div>{el.location.city}</div>
              </span>
            </span>
          </div>)
        }
      </div>
  );
};

export default Users;
