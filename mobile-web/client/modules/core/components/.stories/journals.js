import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Journals from '../journals.jsx';

storiesOf('core.Journals', module)
  .add('default view', () => {
    return (
      <Journals />
    );
  })
