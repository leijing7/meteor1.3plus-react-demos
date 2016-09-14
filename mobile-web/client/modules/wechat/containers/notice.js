import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';
import Notice from '../components/notice.jsx';
import {composer} from '../../core/containers/notice';

export const depsMapper = (context, actions) => ({
  save: actions.notice.save,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Notice);
