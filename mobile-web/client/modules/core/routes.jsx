import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout, JournalLayout, PostLayout} from './components/main_layout.jsx';
import Home from './components/home.jsx';
import Journals from './components/journals.jsx';
import NewArticle from './components/new_article.jsx';
import EditorContact from './containers/editor_contact.js';
import {Mobile_CoCompaniesContainer} from './containers/co_companies.js';
import Conferences from './containers/conferences.js';
import Notice from './containers/notice.js';
import Experts from './containers/experts.js';
import Post from './containers/post.js';
import FootBar from './components/foot_bar';
import Util from '/lib/util';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  const JournalLayoutCtx = injectDeps(JournalLayout);
  const PostLayoutCtx = injectDeps(PostLayout);

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

  const routerAdminHome = router('home', <Home />, MainLayoutCtx)
  routerAdminHome['triggersEnter'] =
    [function(context, redirect) {
      //if is pc, go to the admin site; otherwise go to wechat pages
      if (!Util.isMobileDevice()) {
        redirect('/admin/home');
      } else {
        redirect('/v3/home');
      }
    }]
  FlowRouter.route('/', routerAdminHome);
  FlowRouter.route('/experts', router('experts', <Experts />, MainLayoutCtx));
  FlowRouter.route('/co', router('cooperation', <Mobile_CoCompaniesContainer />, MainLayoutCtx));
  FlowRouter.route('/conf', router('conferences', <Conferences />, MainLayoutCtx));

  FlowRouter.route('/journal', router('journal', <Journals />, JournalLayoutCtx));
  FlowRouter.route('/p/:postId', router('post', <Post />, PostLayoutCtx));

  FlowRouter.route('/search', router('search', <NewArticle />, JournalLayoutCtx));
  FlowRouter.route('/notice', router('notice', <Notice />, JournalLayoutCtx));
  FlowRouter.route('/contact', router('contact', <EditorContact />, JournalLayoutCtx));

  FlowRouter.notFound = {
    action() {
      alert("你找的地址不存在")
      FlowRouter.go("/")
    }
  };
}
