import React, {useEffect, useState} from 'react';
import {UserType} from '../../redux/users-reducer';
import style from './Users.module.css'
import axios from 'axios';
import user from '../../assets/icons/user.png'

type UsersPropsType = {
  users: Array<UserType>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
}
type UsersApiPropsType = {
  followed: boolean
  id: number
  name: string
  photos: {
    large: any
    small: any
  }
  status: any
  uniqueUrlName: any
}

const Users = (props: UsersPropsType) => {
  const [usersData, setUsersData] = useState(props.users)
  useEffect(() => {//для выполнения одного запроса (без юзЭфекта будет бесконечный запрос)
    axios.get('https://social-network.samuraijs.com/api/1.0/users')//делаем на сервер запрос о данных
        .then(response => {//делаем с данными что-то
          console.log(response.data.items)
          setUsersData(response.data.items)
        })

  },[props])


  const followButton = (id: number) => {
    props.follow(id)
  }
  const unFollowButton = (id: number) => {
    props.unfollow(id)
  }

  return (
      <div>
        {
          usersData.map(el => <div key={el.id}>
            <span>
              <div><img src={user} className={style.photoUser}/></div>
              <div>
                {el.followed
                    ? <button onClick={() => {
                      unFollowButton(el.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                      followButton(el.id)
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
