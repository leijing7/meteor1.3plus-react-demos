import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Journals from './components/journals.jsx';
import NewArticle from './components/new_article.jsx';
import EditorContact from './containers/editor_contact.js';
import CoCompanies from './containers/co_companies.js';
import Util from '/lib/util';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    triggersEnter: [function(context, redirect) { //if is pc, go to the admin site
      if (!Util.isMobileDevice()) {
        redirect('/admin');
      }
    }],
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
        content: () => (<CoCompanies />)
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

  FlowRouter.route('/contact', {
    name: 'contact',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EditorContact item={'contact'}/>)
      });
    }
  });

  FlowRouter.notFound = {
    action() {
      alert("你找的地址不存在")
      FlowRouter.go("/")
    }
  };
}
