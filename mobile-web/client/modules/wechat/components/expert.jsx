import React from 'react';

import {experts} from '/lib/mocking';

const Titles = ({title, authors}) =>
  <div style={{paddingTop: 15, paddingLeft: 10, paddingRight: 10}}>
    <strong></strong> {title}
    <br />
    <span style={{paddingLeft: '60%'}}> --- {authors.map( (a, idx)=> <span key={idx}> {a} </span> )}</span>
    <br/>
    <div className="ui  divider"/>
  </div>

class Search extends React.Component {
  searchBtnClicked(){
    const author = this.refs.author.value
    const serial = this.refs.serial.value
    if (!author && !serial) {
      alert("第一作者或文章标号至少填写一项");
      return
    }
    console.log(author, serial);
  }
  render(){
    return(
      <div>
        <div className="weui_cells">
          <div className="weui_cell">
            <div className="weui_cell__hd"><label className="weui_label">文章题目</label></div>
             <div className="weui_cell_bd weui_cell_primary">
                <input className="weui_input" ref="author" placeholder="请输入"/>
             </div>
          </div>
          <div className="weui_cell">
            <div className="weui_cell__hd"><label className="weui_label">第一作者</label></div>
             <div className="weui_cell_bd weui_cell_primary">
                <input className="weui_input" ref="author" placeholder="请输入"/>
             </div>
          </div>
          <div className="weui_cell">
            <div className="weui_cell__hd"><label className="weui_label">文章编号</label></div>
             <div className="weui_cell_bd weui_cell_primary">
              <input className="weui_input" ref="serial" placeholder="请输入"/>
             </div>
          </div>
        </div>

        <div className="weui_btn_area">
          <a className="weui_btn weui_btn_primary" href="javascript:" id="showTooltips" onClick={this.searchBtnClicked.bind(this)}>查询</a>
        </div>
        <h4 className="ui horizontal divider header">
          最近查询
        </h4>
      </div>
    )
  }
}

class Expert extends React.Component {
  constructor(props) {
    super(props);
  }
  interviewBtnClicked(){

  }
  render() {
    let content = <Search />
    if (FlowRouter.getQueryParam("item") === "latest") {
      content = latestArticles.map( (a, idx) => <Titles {...a} key={idx}/> )
    }
    const imgStyle = {
      borderTop: 'solid #f49a9a',
      borderBottom:'solid #f49a9a'
    }
    return (
      <div>
        <img src="/imgs/zghd.png" width="100%" style={imgStyle}/>
        <h2 style={{padding: 10}}>{experts[0].name}</h2>
        <hr/>
        <h3 style={{color: 'red', paddingLeft: 10}}>生平简介</h3>
        <p style={{padding: 10}}>“华龙一号”总设计师</p>
        <hr />
        <h3 style={{color: 'red', paddingLeft: 10}}>主要成就</h3>
        <p style={{padding: 10}}>中国核电工程有限公司副总经理、总工程师、“华龙一号”总设计师，致力于核电工程的设计研究及管理工作</p>

        <div className="weui_btn_area" style={{paddingTop: 15}}>
          <a className="weui_btn weui_btn_primary" href="javascript:" id="showTooltips" onClick={this.interviewBtnClicked.bind(this)}>采访内容</a>
        </div>
      </div>
    );
  }
}

export default Expert;
