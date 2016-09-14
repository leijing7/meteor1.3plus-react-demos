import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Payment from '../payment.jsx';

storiesOf('wechat.Payment', module)
  .add('default view', () => {
    return (
      <Payment />
    );
  })
