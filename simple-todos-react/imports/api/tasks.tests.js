/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';

import { Tasks } from './tasks.js';

if (Meteor.isServer) {
  describe('Tasks', () => {
    describe('methods', () => {
      const userId = Random.id();
      let taskId;

//在数据库内插入一条文档用来测试
      beforeEach(() => {
        Tasks.remove({});
        taskId = Tasks.insert({
          text: 'test task',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });

      it('能够删除私有任务', () => {
        // 找到内部的方法
        const deleteTask = Meteor.server.method_handlers['tasks.remove'];

        // 设置一个假的调用方式
        const invocation = { userId };

        // 把上面的临时 userId 作为 this 的属性传入 deleteTask 并调用
        deleteTask.apply(invocation, [taskId]);

        // 验证和期望的一样
        assert.equal(Tasks.find().count(), 0);
      });
    });
  });
}
