import React from 'react';
import {Color} from '/lib/util';

class ArticleNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navBarClassName: ['active item', 'item', 'item'], navBar: 0 }
  }

  hottestClicked(){
    this.setState({ navBarClassName: ['active item', 'item', 'item'], navBar: 0 })
  }
  newestClicked(){
    this.setState({ navBarClassName: ['item', 'active item', 'item'], navBar: 1 })
  }
  historyClicked(){
    this.setState({ navBarClassName: ['item', 'item', 'active item'], navBar: 2 })
  }
  render(){
    const navBarStyle = {backgroundColor: Color.menuBgGray}
    return (
      <div style={navBarStyle} className="ui ">
        <div className="ui two item inverted menu" style={navBarStyle}>
          <a className="item" onClick={this.hottestClicked.bind(this)}>
            <i className="search icon"/> 文章查询
          </a>
          <a className="item" onClick={this.historyClicked.bind(this)}>
            最新录用
          </a>
        </div>
      </div>
    )
  }
}

export default ArticleNavBar;
