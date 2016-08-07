import Post from '../components/post';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, postId, clearErrors}, onData) => { // 新加了 clearErrors
  const {Meteor, Collections, LocalState} = context(); // 新加了 LocalState
  const error = LocalState.get('SAVING_ERROR');  // 获取 error 信息

  if (Meteor.subscribe('posts.single', postId).ready()) {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post, error}); // 传入 error 信息
  } else {
    const post = Collections.Posts.findOne(postId);
    if (post) {
      onData(null, {post, error}); // 传入 error 信息
    } else {
      onData();
    }
  }

  return clearErrors; // 返回 clearErrors 函数清理错误信息
};

// 注入 context 和 actions
export const depsMapper = (context, actions) => ({
  modify: actions.header.modify,
  clearErrors: actions.header.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)  // 在这里注入 action
)(Post);
