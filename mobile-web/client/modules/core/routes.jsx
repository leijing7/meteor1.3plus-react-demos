import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Journals from './components/journals.jsx';
import NewArticle from './components/new_article.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/journal', {
    name: 'journal',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Journals />)
      });
    }
  });

  FlowRouter.route('/co', {
    name: 'cooperation',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/expert', {
    name: 'experts',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/conf', {
    name: 'conferences',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });


  FlowRouter.route('/search', {
    name: 'search',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewArticle item={'search'}/>)
      });
    }
  });
}
