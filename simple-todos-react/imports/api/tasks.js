import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


// Collection 是 Meteor 数据库（MongoDB）保存数据的方式，类似 SQL 的表。
// 它的每条数据叫做文档 document，相当于 SQL 的一行记录。
// Meteor 特殊的地方在于服务器和客户端都能读取数据，所以可以少些很多逻辑代码，特别是在服务端；
// 还有就是 Meteor 会自动更新数据，不用再写代码获取最新的数据。

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish tasks that are public or belong to the current user
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({
      $or: [
        { private: { $ne: true } },
        { owner: this.userId },
      ],
    });
  });
}

Meteor.methods({
  'tasks.insert'(text) {
    check(text, String);

    // 在插入数据前确认用户已经登录
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

// 下面是为了说明 optimistic ui 的预测更新
// 大家会看到在添加新任务时会有页面闪烁现象，就是新添加的任务出现在了任务列表，
// 但是因为服务器端直接跳过了，所有又收回，就闪烁了
// 但是最终 3 秒后还是出现在了任务列表
    // if (Meteor.isServer) {
    //   Meteor.setTimeout(() => {
    //     Tasks.insert({
    //       text,
    //       createdAt: new Date(),
    //       owner: this.userId,
    //       username: Meteor.users.findOne(this.userId).username,
    //     });
    //   }, 3000)
    // }
    // if (Meteor.isClient) {
    //   Tasks.insert({
    //     text,
    //     createdAt: new Date(),
    //     owner: this.userId,
    //     username: Meteor.users.findOne(this.userId).username,
    //   });
    // }

    Tasks.insert({
      text,
      createdAt: new Date(),
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username,
    });
  },
  'tasks.remove'(taskId) {
    check(taskId, String);

    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== this.userId) {
      // If the task is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
    }

    Tasks.remove(taskId);
  },
  'tasks.setChecked'(taskId, setChecked) {
    check(taskId, String);
    check(setChecked, Boolean);

    const task = Tasks.findOne(taskId);
    if (task.private && task.owner !== this.userId) {
      // If the task is private, make sure only the owner can check it off
      throw new Meteor.Error('not-authorized');
    }

    Tasks.update(taskId, { $set: { checked: setChecked } });
  },
  'tasks.setPrivate'(taskId, setToPrivate) {
    check(taskId, String);
    check(setToPrivate, Boolean);

    const task = Tasks.findOne(taskId);

    // Make sure only the task owner can make a task private
    if (task.owner !== this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Tasks.update(taskId, { $set: { private: setToPrivate } });
  },
});
