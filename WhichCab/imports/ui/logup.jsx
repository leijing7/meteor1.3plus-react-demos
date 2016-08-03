import React from 'react';
import ReactDOM from 'react-dom';
import ErrorMsg from './errorMsg.jsx';

export default class Logup extends React.Component{
  componentDidMount(){
    DocHead.setTitle("注册")
  }
  logupBtnClicked(){
    const code = ReactDOM.findDOMNode(this.refs.inviteCodeInput).value.trim()
    Meteor.call('validateInviteCode', code, (err, res) => {
      if (err) {
        console.error(err)
        return
      }
      if (res) {
        this.createUser()
      } else {
        alert('邀请码不对')
      }
    })
  }
  createUser(){
    let user = this.checkUserInputs();
    if (user) {
      Accounts.createUser(user, err => {
        if (err) {
          console.log("Cannot create user: ", err.reason)
          return
        }
        console.log(Meteor.users.find().count())
        alert('用户注册完成')
        ReactDOM.findDOMNode(this.refs.usernameInput).value = ''
        ReactDOM.findDOMNode(this.refs.emailInput).value = ''
        ReactDOM.findDOMNode(this.refs.passwordInput).value = ''
        ReactDOM.findDOMNode(this.refs.orgNameInput).value = ''
        ReactDOM.findDOMNode(this.refs.mobileInput).value = ''
      })
    }
  }
  checkUserInputs() {
    var user = {
      username: ReactDOM.findDOMNode(this.refs.mobileInput).value.trim(),
      email: ReactDOM.findDOMNode(this.refs.emailInput).value.trim(),
      password: ReactDOM.findDOMNode(this.refs.passwordInput).value.trim(),
      profile: {
        orgName: ReactDOM.findDOMNode(this.refs.orgNameInput).value.trim(),
        name: ReactDOM.findDOMNode(this.refs.usernameInput).value.trim()
      }
    }

    if ( !user.profile.orgName || !user.profile.name || !user.username || !user.password ){
      console.log('Logup info is empty')
      ReactDOM.render( <ErrorMsg p={'必填项不能为空'}/>, document.getElementById("errMsg") )
      return false
    }

    if (!/^1[3|4|5|7|8]\d{9}$/.test(user.username)) {
      ReactDOM.render(
        <ErrorMsg p={'手机号格式不对'}/>,
        document.getElementById("errMsg")
      )
      return false
    }

    return user
  }
  mobileInputOnFocus(){
    ReactDOM.unmountComponentAtNode(document.getElementById("errMsg"))
  }
  render(){
    let fieldStyle = {
      margin: 'auto',
      left: 0,
      right: 0,
      paddingTop: 10
    }
    return (
      <div className="ui container">
        <form className="ui large form">
          <div
            className="five wide field"
            style={fieldStyle}>
            <div className="ui left icon input">
              <i className="home icon"/>
              <input
                type="text"
                placeholder="企业或商户名称*"
                ref="orgNameInput"/>
            </div>
          </div>
          <div
            className="five wide field"
            style={fieldStyle}>
            <div className="ui left icon input">
              <i className="user icon"/>
              <input
                type="text"
                placeholder="你的姓名*"
                ref="usernameInput"/>
            </div>
          </div>
          <div
            className="five wide field"
            style={fieldStyle}>
            <div className="ui left icon input">
              <i className="mobile icon"/>
              <input
                type="text"
                placeholder="手机号码*"
                ref="mobileInput"
                onFocus={this.mobileInputOnFocus}/>
            </div>
          </div>
          <div
            className="five wide field"
            style={fieldStyle}>
            <div className="ui left icon input">
              <i className="mail outline icon"/>
              <input
                type="text"
                placeholder="邮箱地址（选填）"
                ref="emailInput"/>
            </div>
          </div>
          <div
            className="five wide field"
            style={fieldStyle}>
            <div className="ui left icon input">
              <i className="lock icon"/>
              <input
                type="password"
                placeholder="密 码*"
                ref="passwordInput" />
            </div>
          </div>
          <div
            className="five wide field"
            style={fieldStyle}>
            <div className="ui left icon input">
              <i className="brown coffee icon"/>
              <input
                type="password"
                placeholder="邀请码*"
                ref="inviteCodeInput" />
            </div>
          </div>
        </form>

        <div
          className="ui center aligned grid"
          style={fieldStyle}>
          <div className="five wide column">
            <div
              className='fluid ui large orange button'
              onClick={this.logupBtnClicked.bind(this)}>
              注 &nbsp; 册
            </div>
          </div>

          <div className='row'>
            <div> 已有账号？<a href="/a/login">登录</a> </div>
          </div>

          <div className='row'>
            <div id='errMsg'/>
          </div>
        </div>

      </div>
    )
  }
}
