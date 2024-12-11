const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';


let initialState = {
chats: [
    {id:1, name:'Ksu'},
    {id:2, name:'Anna'},
    {id:3, name:'Victor'},
    {id:4, name:'Uliana'}
],
messages: [
    {id:1, text:'Monday'},
    {id:2, text:'Tuesday'},
    {id:3, text:'Wednesday'},
    {id:3, text:'Thursday'},
    {id:3, text:'Friday'}  
  ],

newMessageText: ''

}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy
    switch(action.type) {
        case ADD_MESSAGE: 
        return {
          ...state,
          newMessageText: '',
          messages: [...state.messages,{ id:4, text:state.newMessageText}]
        };
        return stateCopy;
        
        case UPDATE_NEW_MESSAGE:
          return {
            ...state,
            newMessageText: action.newText
          };
          default:
            return state;
      }

}

export const addMessage = () => {
  return {
    type: 'ADD_MESSAGE'
  }
}

export const updateNewMessageBody = (mess) => {
  return {
    type: 'UPDATE_NEW_MESSAGE', newText:mess
  }
}

export default dialogsReducer;