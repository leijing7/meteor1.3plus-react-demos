import {composeWithTracker} from 'react-komposer';
import UserInfo from '../components/user_info.jsx';

function login() {
  const username = `用户: ${Random.id()}`;
  const password = 'password';
  Accounts.createUser({username, password});
}

function logout() {
  Meteor.logout();
}

function composer(props, onData) {
  const user = Meteor.user();
  onData(null, {user, login, logout});
};

export default composeWithTracker(composer)(UserInfo);
