import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import FootBar from '../foot_bar.jsx';

storiesOf('core.FootBar', module)
  .add('default view', () => {
    return (
      <FootBar />
    );
  })
