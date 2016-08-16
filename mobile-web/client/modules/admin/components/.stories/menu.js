import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Menu from '../menu.jsx';

storiesOf('admin.Menu', module)
  .add('default view', () => {
    return (
      <Menu />
    );
  })
