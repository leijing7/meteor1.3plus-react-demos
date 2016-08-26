import {EditorContact} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'contact.save'(contactId, contact) {
      contact.updatedAt = new Date().valueOf();
      EditorContact.update(contactId, {$set: contact})
    }
  });
}
