import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Expert from '../expert.jsx';

storiesOf('wechat.Expert', module)
  .add('default view', () => {
    return (
      <Expert />
    );
  })
