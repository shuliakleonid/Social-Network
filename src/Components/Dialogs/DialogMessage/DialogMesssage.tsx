import style from '../Dialogs.module.css';
import React from 'react';


type DialogItemType = {
  id: number
  name: string
  message: string
}

type DialogType = {
  value: Array<DialogItemType>
}

export const DialogItemMessage = (props: DialogType) => {
  return (
      <ul className={style.list}>
        {
          props.value.map((t) => <li>
                <li>{t.message}</li>
              </li>
          )
        }
      </ul>
  )
}