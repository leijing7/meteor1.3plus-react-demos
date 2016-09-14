import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Contact from '../contact.jsx';

storiesOf('wechat.Contact', module)
  .add('default view', () => {
    return (
      <Contact />
    );
  })
