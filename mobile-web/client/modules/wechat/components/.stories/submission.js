import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Submission from '../submission.jsx';

storiesOf('wechat.Submission', module)
  .add('default view', () => {
    return (
      <Submission />
    );
  })
