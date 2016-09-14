import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Contact from '../components/contact.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('editor.contact').ready()) {
    const contact = Collections.EditorContact.find().fetch()[0];
    onData(null, {...contact});
  } else {
    onData();
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(Contact);
