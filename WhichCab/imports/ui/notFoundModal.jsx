import React from 'react';

export default class NotFoundModal extends React.Component{
  componentDidMount() {
    $('#msgModal')
    .modal({
      onDeny(){
        window.location.href= '/'
      }
    })
    .modal('show')
  }
  render(){
    return(
      <div className="ui small modal" id="msgModal">
        <div className="negative header"> 错误 404 </div>
        <div className="content">
          <div className="description">
            <h1>对不起，你访问的页面不存在</h1>
          </div>
        </div>
        <div className="actions">
          <div className="ui deny button">关闭</div>
        </div>
      </div>
    )
  }
}
