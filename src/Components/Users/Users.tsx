import React, {FunctionComponent} from 'react';
import style from './Users.module.css';
import user from '../../assets/icons/user.png';
import {UsersApiPropsType} from './UsersFunction';

type UsersTypeProps = {
  users: Array<UsersApiPropsType>
  pageSize:number
  totalUsersCount:number
  currentPage:number
  follow: (id: number) => void
  unfollow: (id: number) => void
  onPageChanged:(page:number)=>void
}
const Users:FunctionComponent<UsersTypeProps>= (props) => {

  const pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
  const pages=[];
  for (let i =1;i<=pagesCount;i++){
    pages.push(i)
  }

  return (
      <div>
        <div>
          {
            pages.map(el=><span onClick={()=>props.onPageChanged(el)} className={ props.currentPage === el ? style.pageNumber:''}>{el}--</span>)
          }
        </div>
        {
           props.users.map(el => <div key={el.id}>
            <span>
              <div><img alt='img' src={el.photos.small !=null?el.photos.small: user} className={style.photoUser}/></div>
              <div>
                {el.followed
                    ? <button onClick={() => {
                       props.unfollow(el.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                       props.follow(el.id)
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
