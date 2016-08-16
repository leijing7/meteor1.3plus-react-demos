import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Menu from '../components/menu.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const user = Meteor.user()
  const data = user ? {username: user.profile.name} : {username: ''}
  console.log(user);
  onData(null, data);
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Menu);
