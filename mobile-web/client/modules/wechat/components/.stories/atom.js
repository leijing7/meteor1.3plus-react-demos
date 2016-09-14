import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Atom from '../atom.jsx';

storiesOf('wechat.Atom', module)
  .add('default view', () => {
    return (
      <Atom />
    );
  })
