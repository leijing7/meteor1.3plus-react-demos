import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import JournalNavBar from '../journal_nav_bar.jsx';

storiesOf('core.JournalNavBar', module)
  .add('default view', () => {
    return (
      <JournalNavBar />
    );
  })
