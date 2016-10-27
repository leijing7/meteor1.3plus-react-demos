import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {Color} from '../lib/util';

// modules
import coreModule from './modules/core';
import adminModule from './modules/admin';
import wechatModule from './modules/wechat';
import v3Module from './modules/v3';

Meteor.startup(function() {
  document.body.style.backgroundColor = Color.almostWhite

  DocHead.setTitle("Mobile Web");
  const metaInfo = {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0"
  };
  DocHead.addMeta(metaInfo);

  console.log("--- Client Started --- ");
})

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(adminModule);
app.loadModule(wechatModule);
app.loadModule(v3Module);
app.init();
