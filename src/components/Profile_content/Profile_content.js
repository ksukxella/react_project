import React from 'react';
import p from './Profile_content.module.css';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './MyPosts/Post/MyPostsContainer';

const Profile_content = (props) => {

    return (
        <div className={p.profile}>
       <Profileinfo/>
       <MyPostsContainer store={props.store}  />
       </div>
    );
  };

  export default Profile_content;