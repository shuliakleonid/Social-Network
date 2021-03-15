import React from 'react';
import {DialogsPageType} from '../../types/entities';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import Dialogs, {DialogsPropsType} from './Dialogs';
import {connect} from 'react-redux';
import {Action, Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import {ProfileContainerPropsType} from '../Profile/ProfileContainer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

// type PropsType = {
//   dialogsPages: DialogsPageType
//   dispatch: (action: ActionType) => void
// }
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

type MapStateToPropsType = {
  dialogsPages: DialogsPageType
  isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPages: state.dialogsPages,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onSendMessageClick: () => dispatch(addMessageActionCreator()),
    changeValueMessage: (text: string) => dispatch(updateNewMessageTextActionCreator(text))

  }
}

// const AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogContainer;
