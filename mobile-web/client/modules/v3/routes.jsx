import React from 'react';
import {mount} from 'react-mounter';
import Home from './components/home.jsx'
import JournalList from './components/journal_list.jsx'
import JournalManage from './components/journal_manage.jsx'
import JournalDetail from './components/journal_detail.jsx'
import UserInfo from './components/user_info.jsx'
import Feedback from './components/feedback.jsx'
import FavoriteJournal from './components/favorite_journal.jsx'
import FavoriteConf from './components/favorite_conf.jsx'
import BookPub from './components/book_pub.jsx'
import Library from './components/library.jsx'
import BookDetail from './components/book_detail.jsx'
import CompanyList from './components/company_list.jsx'
import CompanyDetail from './components/company_detail.jsx'
import CompanyApplication from './components/company_application.jsx'
import ConferenceList from './components/conference_list.jsx'
import ConferenceDetail from './components/conference_detail.jsx'
import ExpertList from './components/expert_list.jsx'
import ExpertDetail from './components/expert_detail.jsx'

import {MainLayout} from './components/layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  const v3Routes = FlowRouter.group({
    prefix: '/v3',
    name: 'v3'
  });

  const router = (name, content) => {
    v3Routes.route(`/${name}`, {
      name: `wechat.${name}`,
      action() {
        mount(MainLayoutCtx, {
          content: () => content
        });
      }
    });
  }

 //主页
  router('home', <Home />)
  router('journallist', <JournalList />)
  router('journalmanage', <JournalManage />)
  router('journaldetail', <JournalDetail />)
  router('userinfo', <UserInfo />)
  router('feedback', <Feedback />)
  router('favj', <FavoriteJournal />)
  router('favc', <FavoriteConf />)
  router('bookpub', <BookPub />)
  router('library', <Library />)
  router('bookdetail', <BookDetail />)
  router('companylist', <CompanyList />)
  router('companydetail', <CompanyDetail />)
  router('companyapplication', <CompanyApplication />)
  router('conferencelist', <ConferenceList />)
  router('conferencedetail', <ConferenceDetail />)
  router('expertlist', <ExpertList />)
  router('expertdetail', <ExpertDetail />)

}
