Meteor.publish('posts', () => {
  const selector = {category: {$ne: "private"}};
  return Posts.find(selector);
});

Meteor.publish('singlePost', _id => { // 箭头函数在单个输入参数时可以不使用括号
  check(_id, String);
  return Posts.find({_id});
});
