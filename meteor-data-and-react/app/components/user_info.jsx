import React from 'react';

class UserInfo extends React.Component {
  render() {
    const {user, logout, login} = this.props;
    return (
      <div id="userinfo">
        {user? this.renderGreeting(user, logout) : this.renderLogin(login)}
      </div>
    )
  }

  renderGreeting(user, logout) {
    return (
      <p>
        你好, {user.username}.
        <button id='logout' onClick={logout}>登出</button>
      </p>
    );
  }

  renderLogin(login) {
    return (
      <p>
        <button id='login' onClick={login}>登录</button>
      </p>
    );
  }
}

export default UserInfo;
