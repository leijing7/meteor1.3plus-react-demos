import {createApp} from 'mantra-core';
import initContext from './configs/context';
import {Color} from '../lib/util';

// modules
import coreModule from './modules/core';

Meteor.startup(function() {
  document.body.style.backgroundColor = Color.almostWhite

  DocHead.setTitle("Mobile Web");
  const metaInfo = {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0"
  };
  DocHead.addMeta(metaInfo);

  console.log("Env = ", Meteor.settings.public.env);
  console.log("version = ", Meteor.settings.public.version);
  console.log("--- info --- ", Meteor.settings.serverOnly);
})

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.init();
