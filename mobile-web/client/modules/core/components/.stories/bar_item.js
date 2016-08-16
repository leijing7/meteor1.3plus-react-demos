import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import BarItem from '../bar_item.jsx';

storiesOf('core.BarItem', module)
  .add('default view', () => {
    return (
      <BarItem />
    );
  })
