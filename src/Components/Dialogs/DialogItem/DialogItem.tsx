import style from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';


type DialogItemType = {
  id: number
  name: string
  message: string
}

type DialogType = {
  value: Array<DialogItemType>
}

export const DialogItem = (props: DialogType) => {
  return (
      <ul className={style.list}>
        {
          props.value.map((t) => <li>
                <NavLink to={`/dialogs/${t.id}`}>{t.name}</NavLink>
              </li>
          )
        }
      </ul>
  )
}