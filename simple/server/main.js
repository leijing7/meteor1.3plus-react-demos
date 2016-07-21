import { Meteor } from 'meteor/meteor';
import Counts from '../api/collections.js';

// 发布数据
Meteor.publish('counts.public', function() {
  return Counts.find();
});

// 定义 method
Meteor.methods({
  saveCount(count){
    console.log('Received count: ', count);
    Counts.update({
      fieldName: "countTest"
    },{
      fieldName: "countTest",
      count: count
    })
  }
})


Meteor.startup(() => {
  console.log('Meteor server has started.');

// 每次服务启动时重置 count 为 0
  Counts.upsert({
      fieldName: "countTest"
    },{
      fieldName: "countTest",
      count: 0
    }
  )
});
