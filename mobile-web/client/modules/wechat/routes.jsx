import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './components/layout.jsx';
import Home from './components/home.jsx';
import Submission from './components/submission.jsx';
import Atom from './components/atom.jsx';
import Grids from './components/grids.jsx';
import Notice from './containers/notice';
import ArticleStatus from './components/article_status';
import Payment from './components/payment';
import Contact from './containers/contact';
import Cooperation from './components/cooperation';
import Company from './components/company';
import Conferences from './components/conferences';
import Experts from './components/experts';
import Expert from './components/expert';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const adminRoutes = FlowRouter.group({
    prefix: '/w',
    name: 'wechat'
  });

  const router = (name, content, layout) => {
    adminRoutes.route(`/${name}`, {
      name: `wechat.${name}`,
      action() {
        mount(layout, {
          content: () => content
        });
      }
    });
  }

  router('home', <Home />, MainLayoutCtx)
  router('submission', <Submission />, MainLayoutCtx)
  router('atom', <Atom />, MainLayoutCtx)
  router('committee', <Grids />, MainLayoutCtx)
  router('notice', <Notice />, MainLayoutCtx)
  router('status', <ArticleStatus />, MainLayoutCtx)
  router('pay', <Payment />, MainLayoutCtx)
  router('contact', <Contact />, MainLayoutCtx)
  router('co', <Cooperation />, MainLayoutCtx)
  router('company', <Company />, MainLayoutCtx)
  router('conf', <Conferences />, MainLayoutCtx)
  router('experts', <Experts />, MainLayoutCtx)
  router('expert', <Expert />, MainLayoutCtx)

}
