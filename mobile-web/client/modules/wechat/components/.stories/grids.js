import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Grids from '../grids.jsx';

storiesOf('wechat.Grids', module)
  .add('default view', () => {
    return (
      <Grids />
    );
  })
