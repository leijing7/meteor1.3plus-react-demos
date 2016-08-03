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


// ServiceConfiguration.configurations.upsert(
//   { service: 'github' },
//   {
//     $set: {
//       clientId: Meteor.settings.githubClientId,
//       secret: Meteor.settings.githubClientSecret
//     }
//   }
// );
//
// ServiceConfiguration.configurations.upsert(
//   { service: 'google' },
//   {
//     $set: {
//       clientId: Meteor.settings.googleClientId,
//       secret: Meteor.settings.googleClientSecret
//     }
//   }
// );
