import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import DialogItemMessage from './DialogMessage/DialogMesssage';
import {DialogsPageType} from '../../types/entities';
import {Redirect} from 'react-router-dom'

type PropsType = {
  isAuth: boolean
  dialogsPages: DialogsPageType
  onSendMessageClick: () => void
  changeValueMessage: (value: string) => void
}

const Dialogs = (props: PropsType) => {
  const onSendMessage = () => {
    props.onSendMessageClick()
  }
  const changeValueMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeValueMessage(e.currentTarget.value)
  }
  if (!props.isAuth) return <Redirect to={'/login'}/>
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
