import {EditorContact, Notice} from '/lib/collections';
import {contact, notice} from '/lib/mocking';

export default function () {
  if (!EditorContact.findOne()) {
    contact.createdAt = new Date().valueOf();
    contact.updatedAt = new Date().valueOf();
    EditorContact.insert(contact);
  }
  if (!Notice.findOne()) {
    notice.createdAt = new Date().valueOf();
    notice.updatedAt = new Date().valueOf();
    Notice.insert(notice);
  }
}
