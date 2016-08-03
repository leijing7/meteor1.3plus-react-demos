import React from 'react';
import ReactDOM from 'react-dom';

export default class Logout extends React.Component{
  componentDidMount(){
    DocHead.setTitle("账号")
  }
  logoutBtnClicked(){
    Meteor.logout(function(err){
      if (err) {
        console.log(err)
      } else {
        FlowRouter.go('/')
      }
    })
  }
  //({ Meteor.user().username }) 是为了证明 Meteor.user() 为什么不可靠
  render(){
    return (
      <div>
        <h1>账号 ({ Meteor.user().username })</h1>
        <hr/>
        <button
          style={{marginTop: 25}}
          className="ui orange button"
          onClick={this.logoutBtnClicked}>
          退出
        </button>
      </div>
    )
  }
}
