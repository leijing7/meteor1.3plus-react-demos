import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Notice from '../components/notice.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('notice').ready()) {
    const notice = Collections.Notice.find().fetch()[0];
    onData(null, notice);
  } else {
    onData();
  }
};

export const depsMapper = (context, actions) => ({
  save: actions.notice.save,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Notice);
