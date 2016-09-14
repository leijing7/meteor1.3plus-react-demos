import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import ArticleStatus from '../article_status.jsx';

storiesOf('wechat.ArticleStatus', module)
  .add('default view', () => {
    return (
      <ArticleStatus />
    );
  })
