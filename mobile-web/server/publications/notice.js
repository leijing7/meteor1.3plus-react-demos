import {Notice} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('notice', function () {
    return Notice.find();
  });
}
