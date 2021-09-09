import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import DialogItemMessage from "./DialogMessage/DialogMesssage";
import { DialogsPageType } from "../../types/entities";
import TextForm, { TextFormType } from "../../Components/Text-form/TextForm";
import { reduxForm } from "redux-form";

export type DialogsPropsType = {
  isAuth: boolean;
  dialogsPages: DialogsPageType;
  addMessageActionCreator: (value: string) => void;
  // updateNewMessageTextActionCreator: (value: string) => void
};

const Dialogs = (props: DialogsPropsType) => {
  // const onSendMessage = () => {
  //   props.addMessageActionCreator()
  // }
  // const changeValueMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   props.updateNewMessageTextActionCreator(e.currentTarget.value)
  // }

  const addMessageText = (value: any) => {
    // console.log(value.addDialog,'dialogs')
    props.addMessageActionCreator(value.addDialog);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.itemList}>
        <DialogItem name={props.dialogsPages.dialogs} />
      </div>
      <div className={style.messagesList}>
        <DialogItemMessage messages={props.dialogsPages.messages} />
      </div>
      <AddMessage
        nameForm={"addDialog"}
        placeholder={"dialog"}
        onSubmit={addMessageText}
      />
      {/*<textarea placeholder='Enter your message' onChange={changeValueMessage}*/}
      {/*          value={props.dialogsPages.newMessageText}/>*/}
      {/*<button onClick={onSendMessage}>Add message</button>*/}
    </div>
  );
};
const AddMessage = reduxForm<{}, TextFormType>({ form: "addMessage" })(
  TextForm
);
export default Dialogs;
