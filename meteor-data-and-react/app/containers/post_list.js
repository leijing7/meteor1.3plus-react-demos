import {composeWithTracker} from 'react-komposer';
import PostList from '../components/post_list.jsx';
import { DocHead } from 'meteor/kadira:dochead';

function composer(props, onData) {
  const handle = Meteor.subscribe('posts');
  if(handle.ready()) {
    const posts = Posts.find({}, {sort: {_id: 1}}).fetch();
    onData(null, {posts});
  };

  DocHead.setTitle('测试博客'); // DocHead 包，设置 tab 的名字
};

export default composeWithTracker(composer)(PostList);
