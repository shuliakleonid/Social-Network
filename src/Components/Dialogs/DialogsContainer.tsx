import React from 'react';
import {ActionType, DialogsPageType} from '../../types/entities';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

type PropsType = {
  dialogsPages: DialogsPageType
  dispatch: (action: ActionType) => void
}

const DialogContainer = (props: PropsType) => {
  const onSendMessageClick = () => {
    props.dispatch(addMessageActionCreator())
  }
  const changeValueMessage = (text: string) => {
    props.dispatch(updateNewMessageTextActionCreator(text))

  }

  return <Dialogs onSendMessageClick={onSendMessageClick}
                  changeValueMessage={changeValueMessage}
                  dialogsPages={props.dialogsPages}/>
}

export default DialogContainer;
