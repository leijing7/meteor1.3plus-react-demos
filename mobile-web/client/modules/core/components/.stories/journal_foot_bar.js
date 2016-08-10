import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import JournalFootBar from '../journal_foot_bar.jsx';

storiesOf('core.JournalFootBar', module)
  .add('default view', () => {
    return (
      <JournalFootBar />
    );
  })
