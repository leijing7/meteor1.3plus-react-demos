import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Post from '../post.jsx';

storiesOf('core.Post', module)
  .add('default view', () => {
    return (
      <Post />
    );
  })
