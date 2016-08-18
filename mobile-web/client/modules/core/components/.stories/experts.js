import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Experts from '../experts.jsx';

storiesOf('core.Experts', module)
  .add('default view', () => {
    return (
      <Experts />
    );
  })
