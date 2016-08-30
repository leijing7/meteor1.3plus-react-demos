import React from 'react';
import {Color} from '/lib/util';

class ArticleNavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  searchClicked(){
    FlowRouter.go('/search')
  }
  latestClicked(){
    FlowRouter.go('/search?item=latest')
  }
  render(){
    const navBarStyle = {backgroundColor: Color.menuBgGray}
    let itemStyles = [" item ", " item "]
    if (FlowRouter.getQueryParam("item") !== "latest") {
      itemStyles[0] = " active item "
    } else {
      itemStyles[1] = " active item "
    }
    return (
      <div style={navBarStyle} className="ui ">
        <div className="ui two item inverted menu" style={navBarStyle}>
          <a className={itemStyles[0]} onClick={this.searchClicked.bind(this)}>
            <i className="search icon"/> 文章查询
          </a>
          <a className={itemStyles[1]} onClick={this.latestClicked.bind(this)}>
            最新录用
          </a>
        </div>
      </div>
    )
  }
}

export default ArticleNavBar;
