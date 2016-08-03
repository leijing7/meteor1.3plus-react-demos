import React from 'react';
import ReactDOM from 'react-dom';

export default class Login extends React.Component{
  componentDidMount(){
    DocHead.setTitle("登录")
  }
  loginBtnClicked(){
    let username = ReactDOM.findDOMNode(this.refs.userNameInput).value.trim()
    let password = ReactDOM.findDOMNode(this.refs.passwordInput).value.trim()

    if (this.checkUserInputs()) {
      Meteor.loginWithPassword(username, password, function(err) {
        if (err) {
          if (err.reason === 'User not found') {
            ReactDOM.render(
              <ErrorMsg p={'该用户不存在'}/>, document.getElementById("errMsg")
            )
          }
          if (err.reason === 'Incorrect password') {
            ReactDOM.render(
              <ErrorMsg p={'密码错误'}/>,
              document.getElementById("errMsg")
            )
          }
          console.log("login failed: ", err.reason)
        } else {
          FlowRouter.go('/');
        }
      });
    }
  }
  loginWithGithub(){
    ReactDOM.render(
      <div className="ui active centered inline loader"/>,
      document.getElementById("errMsg")
    )
    Meteor.loginWithGithub({
      requestPermissions: ['user', 'public_repo'],
      loginStyle: 'redirect',
      redirectUrl: Meteor.absoluteUrl()
    }, function (err, res) {
      if (err){
        console.log(err);
      } else {
        console.log('Github logged in');
        FlowRouter.go('/')
      }
    })
  }
  loginWithGoogle(){
    ReactDOM.render(
      <div className="ui active centered inline loader"/>,
      document.getElementById("errMsg")
    )
    Meteor.loginWithGoogle(function (err, res) {
      if (err) {
        console.log(err);
      } else {
        console.log('Google logged in');
        FlowRouter.go('/')
      }
    });
  }
  checkUserInputs() {
    let username = ReactDOM.findDOMNode(this.refs.userNameInput).value.trim()
    let password = ReactDOM.findDOMNode(this.refs.passwordInput).value.trim()

    if (!username || !password) {
      ReactDOM.render(
        <ErrorMsg p={'输入不能为空'}/>,
        document.getElementById("errMsg")
      )
      return false
    }
    return true
  }
  onFocus(){
    ReactDOM.unmountComponentAtNode(document.getElementById("errMsg"))
  }
  render(){
    let fontStyle = {
      fontWeight: 'lighter'
    }
    return (
      <div>

        <div className="ui center aligned grid">
          <div className='row'>
            <form className="ui large form">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"/>
                  <input
                    type="text"
                    placeholder="手机号"
                    ref="userNameInput"
                    onFocus={this.onFocus}/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"/>
                  <input
                    type="password"
                    placeholder="密 码"
                    ref="passwordInput"
                    onFocus={this.onFocus}/>
                </div>
              </div>
              <div
                className="ui fluid large orange submit button"
                onClick={this.loginBtnClicked.bind(this)}
                style={fontStyle}>
                登 &nbsp; 录
              </div>
            </form>
          </div>

          <div className='row'>
            &nbsp;&nbsp;
            <a onClick={this.loginWithGithub.bind(this)}>
              <i className="big black github icon"/>
            </a>
            &nbsp;&nbsp;
            <a onClick={this.loginWithGoogle.bind(this)}>
              <i className="big black google icon"/>
            </a>
          </div>

          <div className='row'>
            <div> 没有账号？<a href="/a/logup">注册</a> </div>
          </div>

          <div className='row'>
            <div id='errMsg'/>
          </div>
        </div>

      </div>
    )
  }
}
