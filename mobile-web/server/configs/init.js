import {EditorContact} from '/lib/collections';
import {contact} from '/lib/mocking';

export default function () {
  if (!EditorContact.findOne()) {
    EditorContact.insert(contact);
  }
}
