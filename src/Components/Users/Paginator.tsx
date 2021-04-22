import React from 'react';
import {v1} from 'uuid';
import style from './Paginator.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {requestUsers, UsersStateType} from '../../redux/users-reducer';

const Paginator = () => {
  const {currentPage, pageSize, totalUsersCount} = useSelector<AppStateType, UsersStateType>(state => state.usersPages)
  const dispatch = useDispatch()

  const onPageChanged = (page: number) => {
    dispatch(requestUsers(page, pageSize))
  }
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <div>
    {
      pages.map(el => <span key={v1()} onClick={() => onPageChanged(el)}
                            className={currentPage === el
                                ? style.pageNumber
                                : ''}>--{el}--</span>)
    }
  </div>


};

export default Paginator;
