import React from 'react';
import CommentList from '../../comments/containers/comment_list';
// import ModifyHeader from './modify_header';

const postContentStyle = {
  borderBottom: '1px solid #EAEAEA',
  paddingBottom: 35
}

const Post = (props) => (
  <div>
    {props.post.saving ? <p>Saving...</p> : null}
{/*    <h2>{props.post.title} <ModifyHeader {...props}/></h2> */}
    <h2>{props.post.title} </h2>
    <p style={postContentStyle}>
      {props.post.content}
    </p>
    <div>
      <h4>Comments</h4>
      <CommentList postId={props.post._id}/>
    </div>
  </div>
);

export default Post;
