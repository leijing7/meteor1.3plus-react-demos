import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import EditorContact from '../editor_contact.jsx';

storiesOf('core.EditorContact', module)
  .add('default view', () => {
    return (
      <EditorContact />
    );
  })
