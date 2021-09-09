import React from "react";
import { DialogsPageType } from "../../types/entities";
import { addMessageActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { compose } from "redux";
import { AppStateType } from "../../redux/redux-store";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
  dialogsPages: DialogsPageType;
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    dialogsPages: state.dialogsPages,
  };
};
// const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
//   return {
//     onSendMessageClick: () => dispatch(addMessageActionCreator()),
//     changeValueMessage: (text: string) => dispatch(updateNewMessageTextActionCreator(text))
//
//   }
// }

// const AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default compose<React.ComponentType>(
  connect(mapStateToProps, { addMessageActionCreator }),
  withAuthRedirect
)(Dialogs);
