import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {

  let ddd = props.posts.map(items => <Post name={items.message} likes={items.likes} /> )

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();

  }

  let onPostChange = () => {
  props.onPostChange (newPostElement.current.value)
  }
 
  
    return (
        <div>
        <h3>My Posts</h3>
        <div>
          <div>
           <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div> 
            <div>
              <button onClick={addPost}>Add post</button>
            </div>
            </div>
          <div>
        {ddd}
        </div>
        </div>    
    );
  };

  export default MyPosts;