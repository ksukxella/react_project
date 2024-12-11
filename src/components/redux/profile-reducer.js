const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';


let initialState = {
  posts: [
    { id:1, likes:'10 likes', message:'Hello'},
    { id:2, likes:'20 likes', message:'How are you doing?'},
    { id:3, likes:'30 likes', message:'Are you fine?'}
 ],
 newPostText:''
}

const profileReducer = (state = initialState, action) => {
  
    switch (action.type) {
    case ADD_POST: {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likes:'0 likes'
        };
        let stateCopy = {...state, posts: [...state.posts, newPost],
          newPostText: ''
        };
        
        return stateCopy;
      }
        
     case UPDATE_NEW_POST_TEXT: {
        let stateCopy = {...state, newPostText:action.newText };
        return stateCopy;
      }
        default:
            return state;
}

}

export const addPostActionCreator = () => {
    return {
      type: 'ADD_POST'
    }
  }
  
export const updateNewPostTextActionCreator = (text) => {
    return {
      type: 'UPDATE_NEW_POST_TEXT', newText:text
    }
  }

export default profileReducer;