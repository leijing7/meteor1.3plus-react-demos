import publications from './publications';
import methods from './methods';

publications();
methods();

Meteor.startup(function(){
  console.log("--- info --- ", Meteor.settings.serverOnly);
})
