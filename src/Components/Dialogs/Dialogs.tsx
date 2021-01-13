import React from 'react';
import style from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
import {DialogItem} from './DialogItem/DialogItem';
import {DialogItemMessage} from './DialogMessage/DialogMesssage';

let dialogItemValue = [
  {id: 1, name: 'Leonid', message: 'Hi, my name is Leonid'},
  {id: 2, name: 'Sveta', message: 'Hi, i am a student'},
  {id: 3, name: 'Boris', message: 'Hi, I speak English'},
  {id: 4, name: 'Olia', message: 'Hi, I have got a dog'},
  {id: 5, name: 'Zahar', message: 'Hi, I like ice-cream'}
]





export function Dialogs(props: any) {
  return (
      <div className={style.dialogs}>
        <div className={style.itemList}>
          <DialogItem value={dialogItemValue}/>
        </div>
        <div className={style.messagesList}>
          <DialogItemMessage value={dialogItemValue}/>
        </div>

      </div>
  )
}
