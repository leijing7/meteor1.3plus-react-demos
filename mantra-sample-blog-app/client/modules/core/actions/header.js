export default {
  modify({Meteor, LocalState}, id, title) {
    if (!title) {
      return LocalState.set('SAVING_ERROR', ' 标题不能为空');
    }

    LocalState.set('SAVING_ERROR', null);

    Meteor.call('posts.modify', id, title, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
  },

  clearErrors({LocalState}) {
    return LocalState.set('SAVING_ERROR', null);
  }
}
