import {EditorContact} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('editor.contact', function () {
    return EditorContact.find();
  });
}
