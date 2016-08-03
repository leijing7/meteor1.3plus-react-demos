import React from 'react';
import {mount} from 'react-mounter';

import {Layout, SettingLayout, SimpleLayout} from '../../imports/ui/Layout.jsx';
import Menu  from '../../imports/ui/Menu.jsx';
import {PriceTable}   from '../../imports/ui/PriceTable.jsx';
import Compare   from '../../imports/ui/Compare.jsx';
import Result   from '../../imports/ui/Result.jsx';
import Setting   from '../../imports/ui/Setting.jsx';
import Login   from '../../imports/ui/login.jsx';
import Logout  from '../../imports/ui/logout.jsx';
import Logup   from '../../imports/ui/logup.jsx';
import NotFoundModal   from '../../imports/ui/notFoundModal.jsx';


FlowRouter.route("/", {
  action() {
    mount(Layout, {
      menu: <Menu activeItem={'home'}/>,
      content: (
        <div>
          <PriceTable />
          <Compare />
        </div>
      )
    });
  }
});

FlowRouter.route("/p/:dist", {
  action(params, queryParams) {
    mount(Layout, {
      menu: <Menu activeItem={'home'}/>,
      content: (
        <div>
          <PriceTable />
          <Compare />
          <Result {...params} {...queryParams}/>
        </div>
      )
    });
  }
});

FlowRouter.route("/about", {
  action() {
    mount(Layout, {
      menu: <Menu activeItem={'about'}/>,
      content: <div style={{paddingTop: 25}}>只是为了展示 Semantic UI 和 FlowRouter 的使用</div>
    });
  }
});

FlowRouter.route("/a/login", {
  action() {
    mount(SimpleLayout, {
      menu: <Menu activeItem={'account'}/>,
      content: Meteor.userId() ? <Logout/> : <Login />
    });
  }
});

FlowRouter.route("/a/logup", {
  action() {
    mount(SimpleLayout, {
      menu: <Menu activeItem={'account'}/>,
      content: <Logup />
    });
  }
});

FlowRouter.route("/setting", {
  action() {
    mount(SettingLayout, {
      menu: <Menu activeItem={'setting'}/>,
      content: <Setting />
    });
  }
});

FlowRouter.notFound = { //所有 404 页面
  action() {
    // alert("你找的地址不存在")
    // FlowRouter.go("/")
    mount(Layout, {content: <NotFoundModal />});
  }
};
