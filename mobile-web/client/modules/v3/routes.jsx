import React from 'react';
import {mount} from 'react-mounter';
import Home from './components/home.jsx'
import JournalList from './components/journal_list.jsx'
import UserInfo from './components/user_info.jsx'

import {MainLayout} from './components/layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const v3Routes = FlowRouter.group({
    prefix: '/v3',
    name: 'v3'
  });

  const router = (name, content, layout) => {
    v3Routes.route(`/${name}`, {
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
  router('journal', <JournalList />, MainLayoutCtx)
  router('userinfo', <UserInfo />, MainLayoutCtx)
}
