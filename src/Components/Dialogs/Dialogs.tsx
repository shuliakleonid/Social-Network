import React from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import DialogItemMessage from './DialogMessage/DialogMesssage';
import {PostType} from '../../types/entities';

type PropsType={
  messages: Array<PostType>
}

const Dialogs = (props: PropsType) => {

  return (
      <div className={style.dialogs}>
        <div className={style.itemList}>
          <DialogItem messages={props.messages}/>
        </div>
        <div className={style.messagesList}>
          <DialogItemMessage messages={props.messages}/>
        </div>

      </div>
  )
}

export default Dialogs;
