import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import NewArticle from '../new_article.jsx';

storiesOf('core.NewArticle', module)
  .add('default view', () => {
    return (
      <NewArticle />
    );
  })
