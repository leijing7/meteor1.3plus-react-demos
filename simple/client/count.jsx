// 点击次数组件

import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import Counts from '../api/collections.js';

const CountView = ({count}) => <p>点击次数: {count}</p>

// Meteor 利用 pub、sub 机制完成了前端数据和后端数据库的自动同步
// React 配合 Meteor，利用 mixin 自动更新同步到的数据
// 订阅的数据一旦有变化，自动运行，重新渲染本组件
export default CountContainer = createContainer( () => {
  const handle = Meteor.subscribe('counts.public'); // 订阅数据
  if (handle.ready()) {
    return {
      count: Counts.findOne({ fieldName: "countTest"}).count
    }
  }
  return {count: 0}
}, CountView);
