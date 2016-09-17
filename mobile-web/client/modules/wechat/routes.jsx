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

 //主页
  router('home', <Home />, MainLayoutCtx)

// 我要投稿
  router('submission', <Submission />, MainLayoutCtx)
  // 投稿启事，稿件状态等
    router('atom', <Atom />, MainLayoutCtx)
    // 投稿启事
      router('notice', <Notice />, MainLayoutCtx)
    // 文章查询
      router('status', <ArticleStatus />, MainLayoutCtx)
    // 付费信息
      router('pay', <Payment />, MainLayoutCtx)
    // 联系
      router('contact', <Contact />, MainLayoutCtx)

// 合作企业
  router('co', <Cooperation />, MainLayoutCtx)
  //16 grids
    router('committee', <Grids />, MainLayoutCtx)
    // 公司信息
      router('company', <Company />, MainLayoutCtx)

// 行业会议
  router('conf', <Conferences />, MainLayoutCtx)

// 核电专家
  router('experts', <Experts />, MainLayoutCtx)
  //专家信息
    router('expert', <Expert />, MainLayoutCtx)

}
