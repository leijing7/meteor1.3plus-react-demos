import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import mobile_CoCompanies from '../components/co_companies.jsx';
import admin_CoCompanies from '../../admin/components/companies.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export const Mobile_CoCompaniesContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(mobile_CoCompanies);

export const Admin_CoCompaniesContainer = composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(admin_CoCompanies);
