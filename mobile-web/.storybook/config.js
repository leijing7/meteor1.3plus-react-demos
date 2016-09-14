import { configure, setAddon, addDecorator } from '@kadira/storybook';
import { disable } from 'react-komposer';

disable();

function loadStories() {
  require('../client/modules/wechat/components/.stories/index.js');
  require('../client/modules/admin/components/.stories/index.js');
  // require as many as stories you need.
  require('../client/modules/core/components/.stories/index.js');
}

configure(loadStories, module);
