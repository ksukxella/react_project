import React from 'react';
import s from './Messages.module.css';

const Messages = (props) => {
    return (
        
          <div className={s.message}>{props.text}</div>     
    )
}

export default Messages;
