import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Cooperation from '../cooperation.jsx';

storiesOf('wechat.Cooperation', module)
  .add('default view', () => {
    return (
      <Cooperation />
    );
  })
