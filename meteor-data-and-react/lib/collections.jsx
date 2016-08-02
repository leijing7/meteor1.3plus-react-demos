Posts = new Meteor.Collection('posts');
if(Meteor.isServer) {
  Posts.remove({});
  Posts.insert({
    _id: 'one', title: '一 New Meteor Rocks', content: 'Yeah! Check our Meteor Blog for more!'
  });
  Posts.insert({_id: 'two', title: '二 MeteorHacks + Kadira => Kadira++', content: 'Something new soon.'});
  Posts.insert({_id: 'three', title: '三 My Secret Post', category: 'private'});
}
