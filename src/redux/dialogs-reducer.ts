import {ActionType, DialogsPageType, MessagesType} from '../types/entities';
import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from '../constant';

export const dialogsReducer = (state: DialogsPageType, action: ActionType): DialogsPageType => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage: MessagesType = {
        id: Date.now(),
        message: state.newMessageText
      }
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreator = () => ({type: SEND_MESSAGE}) as const
export const updateNewMessageTextActionCreator = (newText: string) => (
    {type: UPDATE_NEW_MESSAGE_BODY, newText: newText}
) as const //воспринимать объект как константу в TS
