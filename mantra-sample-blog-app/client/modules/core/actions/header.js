export default {
  create({Meteor, LocalState}, id, title) {
    if (!title) {
      return LocalState.set('SAVING_ERROR', 'Title are required!');
    }

    LocalState.set('SAVING_ERROR', null);

    Meteor.call('posts.modify', id, title, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
  }
}
