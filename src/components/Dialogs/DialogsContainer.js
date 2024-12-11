import React from 'react';
import {addMessage, updateNewMessageBody} from "../redux/dialogs-reducer";
import Dialogs from './Dialogs';
import {connect} from "react-redux";



let mapStateToProps = (state) => {
  return {
     dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
   return {

    onMessageChange : (message) => {
       dispatch(updateNewMessageBody(message));
    },
    addMessageDialogs: () => {
      dispatch (addMessage());
     }
   }
}

let DialogsContainer = connect (mapStateToProps,mapDispatchToProps )(Dialogs);

export default DialogsContainer;



