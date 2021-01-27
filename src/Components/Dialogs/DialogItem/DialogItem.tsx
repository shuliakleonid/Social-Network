import style from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

type DialogItemType = {
  id: number
  name: string
  message: string
}

type DialogType = {
  messages: Array<DialogItemType>
}

const DialogItem = (props: DialogType) => {

  return (
      <ul className={style.list}>
        {
          props.messages.map((t) => <li key={t.id}>
                <NavLink to={`/dialogs/${t.id}`} >{t.name}</NavLink>
              </li>
          )
        }
      </ul>
  )
}
export default DialogItem;
