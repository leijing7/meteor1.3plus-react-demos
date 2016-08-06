// 这里都是整个应用都要用到的模块，统一引入可以避免再在每个文件去重复 import

import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Tracker} from 'meteor/tracker';

// 可以看到 Meteor 环境，数据库的集合，路由，还有本地的响应式变量等都引入了
export default function () {
  return {
    Meteor,
    FlowRouter,
    Collections,
    LocalState: new ReactiveDict(),
    Tracker
  };
}
