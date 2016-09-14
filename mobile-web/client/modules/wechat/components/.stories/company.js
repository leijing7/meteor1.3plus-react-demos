import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Company from '../company.jsx';

storiesOf('wechat.Company', module)
  .add('default view', () => {
    return (
      <Company />
    );
  })
