import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CoCompanies from '../components/co_companies.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CoCompanies);
