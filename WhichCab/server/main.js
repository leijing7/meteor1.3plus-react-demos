import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log("------ WhichCab Started ------");
});


Meteor.methods({
  validateInviteCode(code){
    return code === '2016';
  }
})


// 防止 user profile 被客户端改写
Meteor.users.deny({
  update() { return true; }
});
