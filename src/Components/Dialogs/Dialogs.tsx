import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import DialogItemMessage from './DialogMessage/DialogMesssage';
import {DialogsPageType} from '../../types/entities';

export type DialogsPropsType = {
  isAuth: boolean
  dialogsPages: DialogsPageType
  addMessageActionCreator: () => void
  updateNewMessageTextActionCreator: (value: string) => void
}

const Dialogs = (props: DialogsPropsType) => {
  const onSendMessage = () => {
    props.addMessageActionCreator()
  }
  const changeValueMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageTextActionCreator(e.currentTarget.value)
  }
  return (
      <div className={style.dialogs}>
        <div className={style.itemList}>
          <DialogItem name={props.dialogsPages.dialogs}/>
        </div>
        <div className={style.messagesList}>
          <DialogItemMessage messages={props.dialogsPages.messages}/>
        </div>
        <textarea placeholder='Enter your message' onChange={changeValueMessage}
                  value={props.dialogsPages.newMessageText}/>
        <button onClick={onSendMessage}>Add message</button>
      </div>
  )
}

export default Dialogs;
