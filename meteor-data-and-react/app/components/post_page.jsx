import React from 'react';
import NoSSR from 'react-no-ssr'; // 客户端渲染
import Comments from './comments.jsx'; // default export 引入方式
import { Waiting } from './comments.jsx'; // 普通 export 引入方式

const PostPage = ({post}) => (
  <div>
    <a href={FlowRouter.path('/')}>Back</a>
    <h3 style={{color: 'green'}}>{post.title}</h3>
    <p>{post.content}</p>
    <hr />

    <NoSSR onSSR={<Waiting />}>
      <Comments />
    </NoSSR>
  </div>
);

export default PostPage;
