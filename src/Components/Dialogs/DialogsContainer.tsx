import React from 'react';
import {ActionType, DialogsPageType} from '../../types/entities';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../store-context';

type PropsType = {
  dialogsPages: DialogsPageType
  dispatch: (action: ActionType) => void
}

const DialogContainer = () => {

  return <StoreContext.Consumer>
    {(store) => {
      let state = store.getState()
      const onSendMessageClick = () => {
        store.dispatch(addMessageActionCreator())
      }
      const changeValueMessage = (text: string) => {
        store.dispatch(updateNewMessageTextActionCreator(text))
      }
      return <Dialogs onSendMessageClick={onSendMessageClick}
                      changeValueMessage={changeValueMessage}
                      dialogsPages={state.dialogsPages}/>
    }
    }</StoreContext.Consumer>
}

export default DialogContainer;
