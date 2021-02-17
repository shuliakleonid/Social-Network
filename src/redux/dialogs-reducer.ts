import {ActionType, DialogsPageType, MessagesType, ProfilePagesType} from '../types/entities';
import {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from '../constant';

const initialState:DialogsPageType = {
  dialogs: [
    {id: 1, name: 'Leonid'},
    {id: 2, name: 'Sveta'},
    {id: 3, name: 'Boris'},
    {id: 4, name: 'Olia'},
    {id: 5, name: 'Zahar'},
    {id: 6, name: 'Bob'},
  ],
  messages: [
    {id: 1, message: 'HI'},
    {id: 2, message: 'How are you'},
    {id: 3, message: 'YO'},
    {id: 4, message: 'Privet'},
    {id: 5, message: 'HI'},
    {id: 6, message: 'HI'},
  ],
  newMessageText: '',
}

export const dialogsReducer = (state=initialState, action: ActionType): DialogsPageType => {
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