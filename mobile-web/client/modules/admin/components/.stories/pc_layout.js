import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import PcLayout from '../pc_layout.jsx';

storiesOf('admin.PcLayout', module)
  .add('default view', () => {
    return (
      <PcLayout />
    );
  })
