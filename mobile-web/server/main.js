import publications from './publications';
import methods from './methods';
import init from './configs/init';

publications();
methods();
init();

Meteor.startup(function(){
  console.log("--- server started --- ");
})
