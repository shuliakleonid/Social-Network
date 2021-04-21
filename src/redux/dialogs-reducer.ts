import {ActionType, DialogsPageType, MessagesType} from '../types/entities';
import {SEND_MESSAGE} from '../constant';

const initialState: DialogsPageType = {
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

export const dialogsReducer = (state = initialState, action: ActionType): DialogsPageType => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage: MessagesType = {
        id: Date.now(),
        message: action.text
      }
      return {...state, messages: [...state.messages, newMessage]}
    default:
      return state;
  }
}

export const addMessageActionCreator = (text:string) => ({type: SEND_MESSAGE,text}) as const
