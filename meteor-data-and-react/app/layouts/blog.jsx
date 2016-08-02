import React from 'react';
import UserInfo from '../containers/user_info';

const BlogLayout = ({content}) => (
  <div>
    <div className="navigation">
    <a href="/">主页</a>
    </div>
    <h1> 我的博客 </h1>
    <UserInfo />
    {content}
  </div>
);

export default BlogLayout;
