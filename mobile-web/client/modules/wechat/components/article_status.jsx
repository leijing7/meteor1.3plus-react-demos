import React from 'react';

import {latestArticles, apiLinks} from '/lib/mocking';

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
    const title  = this.refs.title.value
    const author = this.refs.author.value
    const serial = this.refs.serial.value
    if (!title && !author && !serial) {
      alert("文章题目、第一作者或文章标号至少填写一项");
      return
    }
    console.log(author, serial);
  }
  render(){
    return(
      <div>
        <div style={{padding: 50}}>
          <a className="weui_btn weui_btn_plain_primary" href="javascript:" id="showTooltips" href={apiLinks.current}>本期目次</a>
        </div>
        <div style={{padding: 50}}>
          <a className="weui_btn weui_btn_plain_primary" href="javascript:" id="showTooltips" href={apiLinks.search}>稿件查询</a>
        </div>
        <div style={{padding: 50}}>
          <a className="weui_btn weui_btn_plain_primary" href="javascript:" id="showTooltips" href={apiLinks.past}>过刊浏览</a>
        </div>
      </div>
    )
  }
}

class ArticleStatus extends React.Component {
  constructor(props) {
    super(props);
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
        {content}
      </div>
    );
  }
}

export default ArticleStatus;


// <div className="weui_cells">
//   <div className="weui_cell">
//     <div className="weui_cell__hd"><label className="weui_label">文章题目</label></div>
//      <div className="weui_cell_bd weui_cell_primary">
//         <input className="weui_input" ref="title" placeholder="请输入"/>
//      </div>
//   </div>
//   <div className="weui_cell">
//     <div className="weui_cell__hd"><label className="weui_label">第一作者</label></div>
//      <div className="weui_cell_bd weui_cell_primary">
//         <input className="weui_input" ref="author" placeholder="请输入"/>
//      </div>
//   </div>
//   <div className="weui_cell">
//     <div className="weui_cell__hd"><label className="weui_label">文章编号</label></div>
//      <div className="weui_cell_bd weui_cell_primary">
//       <input className="weui_input" ref="serial" placeholder="请输入"/>
//      </div>
//   </div>
// </div>
//
// <div className="weui_btn_area">
//   <a className="weui_btn weui_btn_primary" href="javascript:" id="showTooltips" onClick={this.searchBtnClicked.bind(this)}>查询</a>
// </div>
// <h4 className="ui horizontal divider header">
//   最近查询
// </h4>
