import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ArticleNavBar from '../article_nav_bar.jsx';

storiesOf('core.ArticleNavBar', module)
  .add('default view', () => {
    return (
      <ArticleNavBar />
    );
  })
