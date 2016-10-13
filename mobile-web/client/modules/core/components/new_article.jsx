import React from 'react';
import ArticleNavBar from './article_nav_bar';

import {latestArticles} from '/lib/mocking';

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
        <div className="weui_cells_title" style={{color: 'red', opacity: 0.7}}>*以下至少填写一项</div>

          <div className="weui_cells">
            <div className="weui_cell">
              <div className="weui_cell__hd"><label className="weui_label">第一作者</label></div>
               <div className="weui_cell_bd weui_cell_primary">
                  <input className="weui_input" ref="author" placeholder="请输入"/>
               </div>
            </div>
            <div className="weui_cell">
              <div className="weui_cell__hd"><label className="weui_label">文章标号</label></div>
               <div className="weui_cell_bd weui_cell_primary">
                <input className="weui_input" ref="serial" placeholder="请输入"/>
               </div>
            </div>
          </div>

          <div className="weui_btn_area">
            <a className="weui_btn weui_btn_primary" href="javascript:" id="showTooltips" onClick={this.searchBtnClicked.bind(this)}>查询</a>
          </div>
        <div style={{paddingLeft:10, paddingTop:20}}>查询记录</div>
      </div>
    )
  }
}

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = <Search />
    if (FlowRouter.getQueryParam("item") === "latest") {
      content = latestArticles.map( (a, idx) => <Titles {...a} key={idx}/> )
    }
    return (
      <div>
        <ArticleNavBar navBarClassName={0}/>
        <img src="imgs/chimney.png" width="100%"/>
        {content}
      </div>
    );
  }
}

export default NewArticle;
