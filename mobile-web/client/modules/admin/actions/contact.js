export default {
  save({Meteor, LocalState}, contactId, contact) {
    Meteor.call('contact.save', contactId, contact, (err) => {
      if (err) {
        console.log("Save contact err ", err);
      }
    })
  },
}
