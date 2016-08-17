import {EditorContact} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'contact.save'(contactId, contact) {
      EditorContact.update(contactId, {$set: contact})
    }
  });
}
