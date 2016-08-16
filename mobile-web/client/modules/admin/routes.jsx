import React from 'react';
import {mount} from 'react-mounter';

import {PcLayout} from '/client/modules/admin/components/pc_layout.jsx';
import Home from './components/home.jsx';
import Experts from './components/experts.jsx';
import Menu from './containers/menu.js';

export default function (injectDeps, {FlowRouter}) {
  const PcLayoutCtx = injectDeps(PcLayout);

  FlowRouter.route('/admin', {
    name: 'admin',
    action() {
      mount(PcLayoutCtx, {
        menu: <Menu activeItem={'home'}/>,
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/admin/experts', {
    name: 'admin.exports',
    action() {
      mount(PcLayoutCtx, {
        menu: <Menu activeItem={'experts'}/>,
        content: () => (<Experts />)
      });
    }
  });
}
