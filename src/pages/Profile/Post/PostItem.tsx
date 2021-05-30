import style from './PostItem.module.css';
import React from 'react';
import sun from '../../../assets/icons/sun.png'

type PostType = {
  message: string
  like: number
}

const PostItem = (props: PostType) => {
  return (
      <div className={style.item}>
        <img src={sun} alt='Profile'/>
        <p>{props.message}</p>
        <p>{props.like}</p>
      </div>
  )
}
export default PostItem;

