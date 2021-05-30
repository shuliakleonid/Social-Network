import style from '../Dialogs.module.css';
import React from 'react';
import {MessagesType} from '../../../types/entities';

type PropsType = {
  messages: Array<MessagesType>
}

const DialogItemMessage = (props: PropsType) => {

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
