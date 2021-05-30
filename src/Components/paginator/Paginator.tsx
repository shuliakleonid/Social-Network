import {FC, useState} from 'react';
import {v1} from 'uuid';
import style from './Paginator.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {requestUsers, UsersStateType} from '../../redux/users-reducer';

type PaginatorType = {
  portionSize: number
}

const Paginator: FC<PaginatorType> = ({portionSize}) => {
  const {
    currentPage,
    pageSize,
    totalUsersCount,
  } = useSelector<AppStateType, UsersStateType>(state => state.usersPages)
  const dispatch = useDispatch()
  const onPageChanged = (page: number) => {
    dispatch(requestUsers(page, pageSize))
  }
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState<number>(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;
  return <div className={style.paginator}>
    {
      portionNumber > 1 &&
      <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
    }
    {
      pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map(el => <span key={v1()} onClick={() => onPageChanged(el)}
                           className={currentPage === el
                               ? style.pageNumber
                               : ''}> {el} </span>)
    }
    {
      portionCount > portionNumber &&
      <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
    }
  </div>

};

export default Paginator;
