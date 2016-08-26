import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import Companies from '../companies.jsx';

storiesOf('admin.Companies', module)
  .add('default view', () => {
    return (
      <Companies />
    );
  })
