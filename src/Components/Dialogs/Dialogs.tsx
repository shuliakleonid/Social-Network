import React, {ChangeEvent} from 'react';
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import DialogItemMessage from './DialogMessage/DialogMesssage';
import {DialogsPageType} from '../../types/entities';
import {Redirect} from 'react-router-dom'
import {updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';

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
  // if (!props.isAuth) return <Redirect to={'/login'}/>
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
