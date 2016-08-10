import React from 'react';
import JournalFootBar from './journal_foot_bar';
import {Color} from '/lib/util';
import ArticleNavBar from './article_nav_bar';

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ArticleNavBar navBarClassName={0}/>
        <img src="imgs/chimney.png" width="100%"/>



        <JournalFootBar item={'search'}/>
      </div>
    );
  }
}

export default NewArticle;
