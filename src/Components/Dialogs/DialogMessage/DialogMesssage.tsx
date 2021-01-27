import style from '../Dialogs.module.css';
import React from 'react';
import {PostType} from '../../../types/entities';

type PropsType={
  messages: Array<PostType>
}

 const DialogItemMessage = (props:PropsType) => {

  return (
      <ul className={style.list}>
        {
          props.messages.map((t) => <li key={t.id}>
                {t.message}
              </li>
          )
        }
      </ul>
  )
}
export default DialogItemMessage;
