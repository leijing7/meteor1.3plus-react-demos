import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout, JournalLayout} from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Journals from './components/journals.jsx';
import NewArticle from './components/new_article.jsx';
import EditorContact from './containers/editor_contact.js';
import {Mobile_CoCompaniesContainer} from './containers/co_companies.js';
import Conferences from './containers/conferences.js';
import {Mobile_NoticeContainer} from './containers/notice.js';
import Experts from './containers/experts.js';
import FootBar from './components/foot_bar';
import Util from '/lib/util';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const JournalLayoutCtx = injectDeps(JournalLayout);

  const router = (name, content, layout) => {
    return {
      name: name,
      action() {
        mount(layout, {
          content: () => content
        });
      }
    }
  }

  const routerHome = router('home', <Home />, MainLayoutCtx)
  routerHome['triggersEnter'] =
    [function(context, redirect) { //if is pc, go to the admin site
      if (!Util.isMobileDevice()) {
        redirect('/admin/home');
      }
    }]
  FlowRouter.route('/', routerHome);
  FlowRouter.route('/experts', router('experts', <Experts />, MainLayoutCtx));
  FlowRouter.route('/co', router('cooperation', <Mobile_CoCompaniesContainer />, MainLayoutCtx));
  FlowRouter.route('/conf', router('conferences', <Conferences />, MainLayoutCtx));

  FlowRouter.route('/journal', router('journal', <Journals />, JournalLayoutCtx));

  FlowRouter.route('/search', router('search', <NewArticle />, JournalLayoutCtx));
  FlowRouter.route('/notice', router('notice', <Mobile_NoticeContainer />, JournalLayoutCtx));
  FlowRouter.route('/contact', router('contact', <EditorContact />, JournalLayoutCtx));

  FlowRouter.notFound = {
    action() {
      alert("你找的地址不存在")
      FlowRouter.go("/")
    }
  };
}
