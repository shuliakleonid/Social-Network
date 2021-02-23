import React from 'react';
import user from '../../assets/icons/user.png';
import style from './Users.module.css';
import axios from 'axios';
import {UsersApiPropsType} from './Users';

type UsersType = {
  users: Array<UsersApiPropsType>
  follow: (id: number) => void
  unfollow: (id: number) => void
  setUsers: (user: Array<UsersApiPropsType>) => void
}


class Users extends React.Component<UsersType> {//конструктор и супер можно не писать оно происходит автоматически
constructor(props:UsersType) {
  super(props);


      axios.get('https://social-network.samuraijs.com/api/1.0/users')//делаем на сервер запрос о данных
          .then(response => {//делаем с данными что-то
            console.log(response.data.items)
            this.props.setUsers(response.data.items)
          })
}


  render() {
    return (
        <div>
          {/*<button onClick={this.getUsers}>Get Users</button>*/}
          {
            this.props.users.map(el => <div key={el.id}>
            <span>
              <div><img alt='img' src={user} className={style.photoUser}/></div>
              <div>
                {el.followed
                    ? <button onClick={() => {
                      this.props.unfollow(el.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                      this.props.follow(el.id)
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
  }
}

export default Users
