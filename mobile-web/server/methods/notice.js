import {Notice} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'notice.save'(noticeId, notice) {
      notice.updatedAt = new Date().valueOf();
      Notice.update(noticeId, {$set: notice})
    }
  });
}
