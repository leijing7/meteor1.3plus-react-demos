import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { setComposerStub } from 'react-komposer';
import CoCompanies from '../co_companies.jsx';

storiesOf('core.CoCompanies', module)
  .add('default view', () => {
    return (
      <CoCompanies />
    );
  })
