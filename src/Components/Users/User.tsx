import React, {FC} from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/icons/user.png';
import {NavLink} from 'react-router-dom';
import {UserDataType} from '../../api/api';
import {useDispatch} from 'react-redux';
import {getFollowThunkCreator, getUnFollowThunkCreator} from '../../redux/users-reducer';

type UserTypeProps = {
  user: UserDataType
  followingInProgress: Array<number>
}
const User: FC<UserTypeProps> = ({user, followingInProgress}) => {
  const dispatch = useDispatch()
  return (
      <div>
            <span>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                <img alt="img" src={user.photos.small != null ? user.photos.small : userPhoto}
                     className={style.photoUser}/></NavLink>
              </div>
              <div>
                {user.followed
                    ? <button
                        disabled={followingInProgress.some(id => id === user.id)}
                        onClick={() => dispatch(getUnFollowThunkCreator(user.id))
                        }>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)}
                              onClick={() => {
                                return getFollowThunkCreator(user.id)
                              }
                              }>Follow</button>}
                </div>
              </span>
        <span>
              <span>
                <div>{user.name}</div>
                 <div>{user.status}</div>
              </span>
              <span>
                <div>{'el.location.country '}</div>
                <div>{'el.location.city'}</div>
              </span>
            </span>
      </div>
  )
};
export default User;
