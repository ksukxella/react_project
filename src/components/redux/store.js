
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
    _state: {

        profilePage: {
            posts: [
                { id:1, likes:'10 likes', message:'Hello'},
                { id:2, likes:'20 likes', message:'How are you doing?'},
                { id:3, likes:'30 likes', message:'Are you fine?'}
             ],
             newPostText:'it-kamasutra'
        },
    
        dialogsPage: {
    
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
    },
    getState() {
     return this._state
    },
    _callSubscriber () {
     console.log("State changed")
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {


      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);
      this._callSubscriber(this._state);
    
        }

    }



export default store;