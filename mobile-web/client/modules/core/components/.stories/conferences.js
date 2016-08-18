import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Conferences from '../conferences.jsx';

storiesOf('core.Conferences', module)
  .add('default view', () => {
    return (
      <Conferences />
    );
  })
