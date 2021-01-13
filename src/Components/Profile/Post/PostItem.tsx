import style from './PostItem.module.css';
import React from 'react';
import sun from '../../../assets/icons/sun.png'

type PostType={
  message:string
}

export function PostItem(props:PostType) {
  return (
      <div className={style.item}>
        <img  src={ sun
          // 'D:/IT_incubator/Social_Network/my-app/src/assets/icons/sun.png'
        } />

        <p>{props.message}</p>
      </div>
  )

}
