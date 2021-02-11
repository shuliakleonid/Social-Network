import style from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {DialogsType} from '../../../types/entities';

type DialogItemPropsType = {
  name:Array<DialogsType>
}

const DialogItem = (props: DialogItemPropsType) => {

  return (
      <ul className={style.list}>
        {
          props.name.map((t) => <li key={t.id}>
                <NavLink to={`/dialogs/${t.id}`} >{t.name}</NavLink>
              </li>
          )
        }
      </ul>
  )
}
export default DialogItem;
