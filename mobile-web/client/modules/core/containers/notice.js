import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import mobile_Notice from '../components/notice.jsx';
import admin_Notice from '../../admin/components/notice.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('notice').ready()) {
    const notice = Collections.Notice.find().fetch()[0];
    onData(null, notice);
  } else {
    onData();
  }
};

///////////////////

export const mobile_depsMapper = (context) => ({
  context: () => context
});

export const Mobile_NoticeContainer = composeAll(
  composeWithTracker(composer),
  useDeps(mobile_depsMapper)
)(mobile_Notice);

////////////////

export const admin_depsMapper = (context, actions) => ({
  save: actions.notice.save,
  context: () => context
});

export const Admin_NoticeContainer = composeAll(
  composeWithTracker(composer),
  useDeps(admin_depsMapper)
)(admin_Notice);
