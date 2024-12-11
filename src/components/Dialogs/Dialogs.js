import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';


 
const Dialogs = (props) => {


let dialogsPage = props.dialogsPage;   // props.store.getState().
    
let dialogElements = dialogsPage.chats.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

let ksu = dialogsPage.messages.map(message => <Messages id={message.id} text={message.text}/>);


const onMessageChange = (e) => {
   let body = e.target.value; 
   props.onMessageChange(body);
}

const addMessage = () => {
  props.addMessageDialogs();
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogElements}               
            </div>
            <div className={s.messages}>
              {ksu}
            </div>
            <div>
          <div>
           <textarea onChange={onMessageChange} value={dialogsPage.newMessageText}></textarea>
            </div> 
            <div>
              <button onClick={addMessage}>Add message</button>
            </div>
            </div>
        </div>
 
    )
}

export default Dialogs;



