import React from 'react';
import user from '../../assets/icons/user.png';
import axios from 'axios';
import {UsersApiPropsType} from './Users';
import style from './Users.module.css'

type UsersType = {
  users: Array<UsersApiPropsType>
  pageSize:number
  totalUsersCount:number
  currentPage:number
  follow: (id: number) => void
  unfollow: (id: number) => void
  setUsers: (user: Array<UsersApiPropsType>) => void
  currentPageChoice:(page:number)=>void
  setTotalUsersCount:(count:number)=>void
}

class Users extends React.Component<UsersType> {//конструктор и супер можно не писать оно происходит автоматически
// constructor(props:UsersType) {
//   super(props);
//
// }
componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)//делаем на сервер запрос о данных
          .then(response => {//делаем с данными что-то
            console.log(response.data.items)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
          })
}
onPageChanged=(page:number)=>{
  this.props.currentPageChoice(page)
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)//делаем на сервер запрос о данных
      .then(response => {//делаем с данными что-то
        console.log(response.data.items)
        this.props.setUsers(response.data.items)
      })
}
  render() {
  const pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
  const pages=[];
  for (let i =1;i<=pagesCount;i++){
    pages.push(i)
  }

    return (
        <div>
          <div>
            { // @ts-ignore
              pages.map(el=><span onClick={()=>this.onPageChanged(el)} className={this.props.currentPage === el && style.pageNumber}>{el}--</span>)
            }

          </div>
          {
            this.props.users.map(el => <div key={el.id}>
            <span>
              <div><img alt='img' src={el.photos.small && user} className={style.photoUser}/></div>
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
