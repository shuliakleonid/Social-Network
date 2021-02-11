import React, {ChangeEvent, useState} from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import DialogItemMessage from './DialogMessage/DialogMesssage';
import {ActionType, DialogsPageType} from '../../types/entities';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/state';

type PropsType = {
  dialogsPages: DialogsPageType
  dispatch: (action: ActionType) => void
}

const Dialogs = (props: PropsType) => {
const onSendMessageClick=()=>{
  props.dispatch(addMessageActionCreator())
}
  const changeValueMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageTextActionCreator(e.currentTarget.value))

  }

  return (
      <div className={style.dialogs}>
        <div className={style.itemList}>
          <DialogItem name={props.dialogsPages.dialogs}/>
        </div>
        <div className={style.messagesList}>
          <DialogItemMessage messages={props.dialogsPages.messages}/>
        </div>
        <textarea placeholder='Enter your message' onChange={changeValueMessage} value={props.dialogsPages.newMessageText}/>
        <button onClick={onSendMessageClick}>Add message</button>
      </div>
  )
}

export default Dialogs;
