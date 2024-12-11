
import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return ( 
       
          <div className={p.item}>{props.likes} {props.name} </div>   
    );
  };

  export default Post;
