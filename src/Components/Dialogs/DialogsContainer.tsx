import React from 'react';
import {ActionType, DialogsPageType, StateType} from '../../types/entities';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';

type PropsType = {
  dialogsPages: DialogsPageType
  dispatch: (action: ActionType) => void
}
/*

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
*/


const mapStateToProps = (state: StateType) => {
  return {
    dialogsPages: state.dialogsPages,
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onSendMessageClick: () => dispatch(addMessageActionCreator()),
    changeValueMessage: (text: string) => dispatch(updateNewMessageTextActionCreator(text))

  }
}
const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogContainer;
