import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import commentsModule from './modules/comments';

// 初始化 context
const context = initContext();

// 创建整个 app，加载模块并初始化
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(commentsModule);
app.init();
