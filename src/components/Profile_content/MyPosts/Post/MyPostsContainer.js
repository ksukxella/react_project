import React from 'react';
import MyPosts from '../MyPosts';
import {updateNewPostTextActionCreator,addPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";



// const MyPostsContainer3 = (props) => {
  
//  let state = props.store.getState();
 
//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());

//   }

//   let onPostChange = (text) => {
//   props.store.dispatch(updateNewPostTextActionCreator(text));
//   }

//   return (
//     <MyPosts onPostChange={onPostChange} addPost={addPost} posts={props.store.getState().profilePage.posts} newPostText={state.profilePage.newPostText} />
//   )
// }

 const mapStateToProps = (state) => {
    return {
      posts: state.profilePage.posts,
      newPostText:state.profilePage.newPostText
    }
 }


 const mapDispatchToProps = (dispatch) => {
       return {
        addPost : () => {
          dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
          }
          

        }
       }

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

  export default MyPostsContainer;