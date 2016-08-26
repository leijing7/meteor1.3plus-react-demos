export default {
  save({Meteor, LocalState}, noticeId, notice) {
    Meteor.call('notice.save', noticeId, notice, (err) => {
      if (err) {
        console.log("Save notice err ", err);
      } else {
        alert("保存完成")
      }
    })
  }
}
